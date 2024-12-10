/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Math blocks for Blockly.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
import * as Blockly from "blockly/core";
import * as Constants from "../constants";

Blockly.Blocks["math_number"] = {
  /**
   * Block for generic numeric value.
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: "%1",
      args0: [
        {
          type: "field_number",
          name: "NUM",
          value: "0",
        },
      ],
      output: "Number",
      outputShape: Constants.OUTPUT_SHAPE_ROUND,
      extensions: ["colours_textfield"],
    });
  },
};

Blockly.Blocks["math_integer"] = {
  /**
   * Block for integer value (no decimal, + or -).
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: "%1",
      args0: [
        {
          type: "field_number",
          name: "NUM",
          precision: 1,
        },
      ],
      output: "Number",
      outputShape: Constants.OUTPUT_SHAPE_ROUND,
      extensions: ["colours_textfield"],
    });
  },
};

Blockly.Blocks["math_whole_number"] = {
  /**
   * Block for whole number value, no negatives or decimals.
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: "%1",
      args0: [
        {
          type: "field_number",
          name: "NUM",
          min: 0,
          precision: 1,
        },
      ],
      output: "Number",
      outputShape: Constants.OUTPUT_SHAPE_ROUND,
      extensions: ["colours_textfield"],
    });
  },
};

Blockly.Blocks["math_positive_number"] = {
  /**
   * Block for positive number value, with decimal.
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: "%1",
      args0: [
        {
          type: "field_number",
          name: "NUM",
          min: 0,
        },
      ],
      output: "Number",
      outputShape: Constants.OUTPUT_SHAPE_ROUND,
      extensions: ["colours_textfield"],
    });
  },
};

Blockly.Blocks["math_angle"] = {
  /**
   * Block for angle picker.
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: "%1",
      args0: [
        {
          type: "field_angle",
          name: "NUM",
          value: 90,
        },
      ],
      output: "Number",
      outputShape: Constants.OUTPUT_SHAPE_ROUND,
      extensions: ["colours_textfield"],
    });
  },
};