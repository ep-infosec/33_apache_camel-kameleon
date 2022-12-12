/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.apache.camel.kameleon;

import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;
import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
public class ConfigurationResourceTest {

    @ConfigProperty(name = "application.version")
    String version;

    @Test
    public void testVersion() {
        given()
                .when().get("/configuration/version")
                .then()
                .statusCode(200)
                .contentType(ContentType.TEXT)
                .body(is(version));
    }

    @Test
    public void testConfiguration() {

        given()
                .when().get("/configuration")
                .then()
                .statusCode(200)
                .contentType(ContentType.JSON)
                .body("types.size()", is(4))
                .body("types[0].name", equalTo("standalone"))
                .body("types[1].name", equalTo("spring"))
                .body("types[2].name", equalTo("quarkus"));

    }
}
