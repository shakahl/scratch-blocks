/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
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

import * as Blockly from "blockly/core";

Blockly.Blocks["looks_sayforsecs"] = {
  /**
   * Block to say for some time.
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_SAYFORSECS,
      args0: [
        {
          type: "input_value",
          name: "MESSAGE",
        },
        {
          type: "input_value",
          name: "SECS",
        },
      ],
      extensions: ["colours_looks", "shape_statement"],
    });
  },
};

Blockly.Blocks["looks_say"] = {
  /**
   * Block to say.
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_SAY,
      args0: [
        {
          type: "input_value",
          name: "MESSAGE",
        },
      ],
      extensions: ["colours_looks", "shape_statement"],
    });
  },
};

Blockly.Blocks["looks_thinkforsecs"] = {
  /**
   * Block to think for some time.
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_THINKFORSECS,
      args0: [
        {
          type: "input_value",
          name: "MESSAGE",
        },
        {
          type: "input_value",
          name: "SECS",
        },
      ],
      extensions: ["colours_looks", "shape_statement"],
    });
  },
};

Blockly.Blocks["looks_think"] = {
  /**
   * Block to think.
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_THINK,
      args0: [
        {
          type: "input_value",
          name: "MESSAGE",
        },
      ],
      extensions: ["colours_looks", "shape_statement"],
    });
  },
};

Blockly.Blocks["looks_show"] = {
  /**
   * Show block.
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_SHOW,
      extensions: ["colours_looks", "shape_statement"],
    });
  },
};

Blockly.Blocks["looks_hide"] = {
  /**
   * Hide block.
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_HIDE,
      extensions: ["colours_looks", "shape_statement"],
    });
  },
};

Blockly.Blocks["looks_hideallsprites"] = {
  /**
   * Hide-all-sprites block. Does not actually do anything. This is an
   * obsolete block that is implemented for compatibility with Scratch 2.0
   * projects.
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_HIDEALLSPRITES,
      extensions: ["colours_looks", "shape_statement"],
    });
  },
};

Blockly.Blocks["looks_changeeffectby"] = {
  /**
   * Block to change graphic effect.
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_CHANGEEFFECTBY,
      args0: [
        {
          type: "field_dropdown",
          name: "EFFECT",
          options: [
            [Blockly.Msg.LOOKS_EFFECT_COLOR, "COLOR"],
            [Blockly.Msg.LOOKS_EFFECT_FISHEYE, "FISHEYE"],
            [Blockly.Msg.LOOKS_EFFECT_WHIRL, "WHIRL"],
            [Blockly.Msg.LOOKS_EFFECT_PIXELATE, "PIXELATE"],
            [Blockly.Msg.LOOKS_EFFECT_MOSAIC, "MOSAIC"],
            [Blockly.Msg.LOOKS_EFFECT_BRIGHTNESS, "BRIGHTNESS"],
            [Blockly.Msg.LOOKS_EFFECT_GHOST, "GHOST"],
          ],
        },
        {
          type: "input_value",
          name: "CHANGE",
        },
      ],
      extensions: ["colours_looks", "shape_statement"],
    });
  },
};

Blockly.Blocks["looks_seteffectto"] = {
  /**
   * Block to set graphic effect.
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_SETEFFECTTO,
      args0: [
        {
          type: "field_dropdown",
          name: "EFFECT",
          options: [
            [Blockly.Msg.LOOKS_EFFECT_COLOR, "COLOR"],
            [Blockly.Msg.LOOKS_EFFECT_FISHEYE, "FISHEYE"],
            [Blockly.Msg.LOOKS_EFFECT_WHIRL, "WHIRL"],
            [Blockly.Msg.LOOKS_EFFECT_PIXELATE, "PIXELATE"],
            [Blockly.Msg.LOOKS_EFFECT_MOSAIC, "MOSAIC"],
            [Blockly.Msg.LOOKS_EFFECT_BRIGHTNESS, "BRIGHTNESS"],
            [Blockly.Msg.LOOKS_EFFECT_GHOST, "GHOST"],
          ],
        },
        {
          type: "input_value",
          name: "VALUE",
        },
      ],
      extensions: ["colours_looks", "shape_statement"],
    });
  },
};

Blockly.Blocks["looks_cleargraphiceffects"] = {
  /**
   * Block to clear graphic effects.
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_CLEARGRAPHICEFFECTS,
      extensions: ["colours_looks", "shape_statement"],
    });
  },
};

Blockly.Blocks["looks_changesizeby"] = {
  /**
   * Block to change size
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_CHANGESIZEBY,
      args0: [
        {
          type: "input_value",
          name: "CHANGE",
        },
      ],
      extensions: ["colours_looks", "shape_statement"],
    });
  },
};

Blockly.Blocks["looks_setsizeto"] = {
  /**
   * Block to set size
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_SETSIZETO,
      args0: [
        {
          type: "input_value",
          name: "SIZE",
        },
      ],
      extensions: ["colours_looks", "shape_statement"],
    });
  },
};

Blockly.Blocks["looks_size"] = {
  /**
   * Block to report size
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_SIZE,
      extensions: ["colours_looks", "output_number", "monitor_block"],
    });
  },
};

Blockly.Blocks["looks_changestretchby"] = {
  /**
   * Block to change stretch. Does not actually do anything. This is an
   * obsolete block that is implemented for compatibility with Scratch 1.4
   * projects as well as 2.0 projects that still have the block.
   * The "stretch" blocks were introduced in very early versions of Scratch,
   * but their functionality was removed shortly later. They still appeared
   * correctly up until (and including) Scratch 1.4 - as "change stretch by"
   * and "set stretch to" - but were removed altogether in Scratch 2.0, and
   * displayed as red "undefined" blocks. Some Scratch projects still contain
   * these blocks, however, and they don't open in 3.0 unless the blocks
   * actually exist (though they still don't funcitonally do anything).
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_CHANGESTRETCHBY,
      args0: [
        {
          type: "input_value",
          name: "CHANGE",
        },
      ],
      extensions: ["colours_looks", "shape_statement"],
    });
  },
};

Blockly.Blocks["looks_setstretchto"] = {
  /**
   * Block to set stretch. Does not actually do anything. This is an obsolete
   * block that is implemented for compatibility with Scratch 1.4 projects
   * (see looks_changestretchby).
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_SETSTRETCHTO,
      args0: [
        {
          type: "input_value",
          name: "STRETCH",
        },
      ],
      extensions: ["colours_looks", "shape_statement"],
    });
  },
};

/**
 * Costumes drop-down menu. Populated dynamically by scratch-gui.
 */
Blockly.Blocks["looks_costume"] = {};

Blockly.Blocks["looks_switchcostumeto"] = {
  /**
   * Block to switch the sprite's costume to the selected one.
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_SWITCHCOSTUMETO,
      args0: [
        {
          type: "input_value",
          name: "COSTUME",
        },
      ],
      extensions: ["colours_looks", "shape_statement"],
    });
  },
};

Blockly.Blocks["looks_nextcostume"] = {
  /**
   * Block to switch the sprite's costume to the next one.
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_NEXTCOSTUME,
      extensions: ["colours_looks", "shape_statement"],
    });
  },
};

Blockly.Blocks["looks_switchbackdropto"] = {
  /**
   * Block to switch the backdrop to the selected one.
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_SWITCHBACKDROPTO,
      args0: [
        {
          type: "input_value",
          name: "BACKDROP",
        },
      ],
      extensions: ["colours_looks", "shape_statement"],
    });
  },
};

/**
 * Backdrop list. Populated dynamically by scratch-gui.
 */
Blockly.Blocks["looks_backdrops"] = {};

Blockly.Blocks["looks_gotofrontback"] = {
  /**
   * "Go to front/back" Block.
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_GOTOFRONTBACK,
      args0: [
        {
          type: "field_dropdown",
          name: "FRONT_BACK",
          options: [
            [Blockly.Msg.LOOKS_GOTOFRONTBACK_FRONT, "front"],
            [Blockly.Msg.LOOKS_GOTOFRONTBACK_BACK, "back"],
          ],
        },
      ],
      extensions: ["colours_looks", "shape_statement"],
    });
  },
};

Blockly.Blocks["looks_goforwardbackwardlayers"] = {
  /**
   * "Go forward/backward [Number] Layers" Block.
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS,
      args0: [
        {
          type: "field_dropdown",
          name: "FORWARD_BACKWARD",
          options: [
            [Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD, "forward"],
            [Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD, "backward"],
          ],
        },
        {
          type: "input_value",
          name: "NUM",
        },
      ],
      extensions: ["colours_looks", "shape_statement"],
    });
  },
};

Blockly.Blocks["looks_backdropnumbername"] = {
  /**
   * Block to report backdrop's number or name
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_BACKDROPNUMBERNAME,
      args0: [
        {
          type: "field_dropdown",
          name: "NUMBER_NAME",
          options: [
            [Blockly.Msg.LOOKS_NUMBERNAME_NUMBER, "number"],
            [Blockly.Msg.LOOKS_NUMBERNAME_NAME, "name"],
          ],
        },
      ],
      extensions: ["colours_looks", "output_number", "monitor_block"],
    });
  },
};

Blockly.Blocks["looks_costumenumbername"] = {
  /**
   * Block to report costume's number or name
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_COSTUMENUMBERNAME,
      args0: [
        {
          type: "field_dropdown",
          name: "NUMBER_NAME",
          options: [
            [Blockly.Msg.LOOKS_NUMBERNAME_NUMBER, "number"],
            [Blockly.Msg.LOOKS_NUMBERNAME_NAME, "name"],
          ],
        },
      ],
      extensions: ["colours_looks", "output_number", "monitor_block"],
    });
  },
};

Blockly.Blocks["looks_switchbackdroptoandwait"] = {
  /**
   * Block to switch the backdrop to the selected one and wait.
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_SWITCHBACKDROPTOANDWAIT,
      args0: [
        {
          type: "input_value",
          name: "BACKDROP",
        },
      ],
      extensions: ["colours_looks", "shape_statement"],
    });
  },
};

Blockly.Blocks["looks_nextbackdrop"] = {
  /**
   * Block to switch the backdrop to the next one.
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: Blockly.Msg.LOOKS_NEXTBACKDROP_BLOCK,
      extensions: ["colours_looks", "shape_statement"],
    });
  },
};