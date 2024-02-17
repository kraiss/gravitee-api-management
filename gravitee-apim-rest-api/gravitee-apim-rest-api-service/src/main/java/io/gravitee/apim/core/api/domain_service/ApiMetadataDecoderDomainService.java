/*
 * Copyright © 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.gravitee.apim.core.api.domain_service;

import io.gravitee.apim.core.api.query_service.ApiMetadataQueryService;
import io.gravitee.apim.core.exception.TechnicalDomainException;
import io.gravitee.apim.core.template.TemplateProcessor;
import io.gravitee.apim.core.template.TemplateProcessorException;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.Map;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class ApiMetadataDecoderDomainService {

    private final ApiMetadataQueryService metadataQueryService;
    private final TemplateProcessor templateProcessor;

    public ApiMetadataDecoderDomainService(ApiMetadataQueryService metadataQueryService, TemplateProcessor templateProcessor) {
        this.metadataQueryService = metadataQueryService;
        this.templateProcessor = templateProcessor;
    }

    public Map<String, String> decodeMetadata(String apiId, ApiMetadataDecodeContext context) {
        var metadata = metadataQueryService
            .findApiMetadata(apiId)
            .entrySet()
            .stream()
            .filter(entry -> entry.getValue().getValue() != null)
            .map(entry -> Map.entry(entry.getKey(), entry.getValue().getValue()))
            .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));

        return decode(metadata, context);
    }

    private Map<String, String> decode(Map<String, String> metadata, ApiMetadataDecodeContext context) {
        if (metadata.isEmpty()) {
            return metadata;
        }

        try {
            var decodedValue = templateProcessor.processInlineTemplate(metadata.toString(), Collections.singletonMap("api", context));

            return Arrays
                .stream(decodedValue.substring(1, decodedValue.length() - 1).split(", "))
                .map(entry -> entry.split("=", 2))
                .collect(Collectors.toMap(entry -> entry[0], entry -> entry.length > 1 ? entry[1] : ""));
        } catch (TemplateProcessorException e) {
            log.warn("Error while creating template '{}' from reader:\n{}", e.getTemplate(), e.getMessage());
            return metadata;
        } catch (Exception ex) {
            throw new TechnicalDomainException("An error occurs while evaluating API metadata", ex);
        }
    }

    @Builder
    @AllArgsConstructor
    @Data
    public static class ApiMetadataDecodeContext {

        private String name;
        private String description;
        private Date createdAt;
        private Date updatedAt;
        private PrimaryOwnerMetadataDecodeContext primaryOwner;
    }

    @Builder
    @AllArgsConstructor
    @Data
    public static class PrimaryOwnerMetadataDecodeContext {

        private String id;
        private String displayName;
        private String email;
        private String type;
    }
}
