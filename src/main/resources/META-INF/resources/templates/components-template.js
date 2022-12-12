/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const ComponentsTemplate = `
<div class="components">
   <div v-model="components" class="title">{{this.$parent.current.componentListTitle}} ({{filtered.length}})</div>
    <div class="pf-c-toolbar toolbar" >
      <div class="pf-c-toolbar__content">
        <div class="pf-c-toolbar__content-section pf-m-nowrap">
            <div class="pf-c-toolbar__item pf-m-search-filter">
                <input v-model="filter" @input="setFilter" @change="setFilter" class="pf-c-form-control" type="search"
                placeholder="Search by name or label"/>
            </div>
        </div>
      </div>
    </div>
    <section class="pf-c-page__main-section components-grid pf-m-fill">
        <div class="pf-l-gallery pf-m-gutter">
            <div v-for="comp in filtered" :key="comp" class="pf-c-card pf-m-hoverable pf-m-compact component-card">
              <div class="pf-c-card__header">
                    <div class="pf-c-content pf-l-flex badge">
                        <div v-if="comp.supportLevel != 'Stable'" class="pf-l-flex__item">
                            <span class="pf-c-badge pf-m-unread preview badge-item">preview</span>
                        </div>
                        <div v-if="comp.nativeSupported" class="pf-l-flex__item">
                            <span class="pf-c-badge pf-m-unread native badge-item">native</span>
                        </div>
                        <div v-for="label in comp.labels" :key="label" class="pf-l-flex__item">
                            <span class="pf-c-badge pf-m-read badge-item">{{label}}</span>
                        </div>
                    </div>
              </div>
              <div class="pf-c-card__title component-title">
                <div class="pf-c-content pf-l-flex">
                    <p id="card-1-check-label">{{comp.title}}</p>
                </div>
              </div>
              <div class="pf-c-card__body">
                <span class="description">{{comp.description}}</span>
              </div>
              <div class="pf-c-card__footer pf-l-flex">
                    <img v-if="comp.icon" v-bind:src='comp.icon' class="icon badge-item">
                    <div class="pf-l-split__item pf-m-fill"></div>
                    <button class="pf-c-button pf-m-link pf-m-small no-padding" type="button" v-on:click="addComponent(comp)">
                        <span class="pf-c-button__icon pf-m-end">
                            <i v-show="!comp.selected" class="fas fa-plus" aria-hidden="true"></i>
                            <i v-show="comp.selected" class="fas fa-check" aria-hidden="true"></i>
                        </span>
                    </button>
              </div>
            </div>
        </div>
    </section>
  </div>
`

export { ComponentsTemplate }
