/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 /*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

document.addEventListener('deviceready', onDeviceReady, false);

    function onDeviceReady(){

            var location_options = {maximumAge: 3000, timeout: 5000, 
               enableHighAccuracy: true};

            navigator.geolocation.getCurrentPosition(onSuccess, onFailure, location_options);


    }

    function onSuccess(position){

        document.getElementById("phone").innerHTML = 
        "zeinab "+"lat and long = "+position.coords.latitude+ " "
        + position.coords.longitude+" "
        +" accuracy = "+position.coords.accuracy;

     // window.cache.clear(onSuccess, onFailure);

        // var options = new FileUploadOptions();
        //     options.chunkedMode = false;
        //     options.headers = {
        //           Connection: "close"
        //        };

    }

    function onFailure(){

        window.alert("failed");

     // window.cache.clear(onSuccess, onFailure);

    }