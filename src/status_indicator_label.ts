/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2018 Google Inc.
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
 * @fileoverview Class for a category header in the flyout for Scratch
 * extensions which can display a textual label and a status button.
 * @author ericr@media.mit.edu (Eric Rosenbaum)
 */

import * as Blockly from "blockly/core";

/**
 * Class for a category header in the flyout for Scratch extensions which can
 * display a textual label and a status button.
 */
export class StatusIndicatorLabel extends Blockly.FlyoutButton {
  /**
   * The ID of the Scratch extension whose status is indicated by this label.
   */
  extensionId: string;

  /**
   * DOM element that displays the status indicator dot.
   */
  imageElement: SVGImageElement;

  /**
   * Opaque data for mouse up listener used to unbind it in dispose().
   */
  mouseUpWrapper: Blockly.browserEvents.Data;

  /**
   * Function to be invoked when the status indicator is clicked.
   */
  static statusButtonCallback: (extensionId: string) => void;

  /**
   * Creates a new StatusIndicatorLabel.
   *
   * @param workspace The workspace in which to place this header.
   * @param targetWorkspace The flyout's target workspace.
   * @param json The JSON specifying the header.
   */
  constructor(
    workspace: Blockly.WorkspaceSvg,
    targetWorkspace: Blockly.WorkspaceSvg,
    json: Blockly.utils.toolbox.LabelInfo
  ) {
    super(workspace, targetWorkspace, json, true);
    this.extensionId = json["id"];

    const heightDelta = 40 - this.height;
    this.height = 40;
    const text = this.getSvgRoot().querySelector("text");
    const previousY = Number(text.getAttribute("y"));

    text.setAttribute("y", `${previousY + heightDelta / 2}`);

    const statusButtonWidth = 30;
    const marginX = 20;
    const marginY = 5;
    const touchPadding = 16;
    const flyoutWidth = targetWorkspace.getFlyout().getWidth();

    const statusButtonX = workspace.RTL
      ? marginX - flyoutWidth + statusButtonWidth
      : (flyoutWidth - statusButtonWidth - marginX) / workspace.scale;

    this.imageElement = Blockly.utils.dom.createSvgElement(
      "image",
      {
        class: "blocklyFlyoutButton",
        height: statusButtonWidth + "px",
        width: statusButtonWidth + "px",
        x: statusButtonX + "px",
        y: marginY + "px",
      },
      this.getSvgRoot()
    );
    const imageElementBackground = Blockly.utils.dom.createSvgElement(
      "rect",
      {
        class: "blocklyTouchTargetBackground",
        height: statusButtonWidth + 2 * touchPadding + "px",
        width: statusButtonWidth + 2 * touchPadding + "px",
        x: statusButtonX - touchPadding + "px",
        y: marginY - touchPadding + "px",
      },
      this.getSvgRoot()
    );

    this.refreshStatus();

    this.mouseUpWrapper = Blockly.browserEvents.bind(
      imageElementBackground,
      "mouseup",
      null,
      () => {
        StatusIndicatorLabel.statusButtonCallback?.call(this, this.extensionId);
      }
    );
  }

  /**
   * Set the image on the status button using a status string.
   */
  refreshStatus() {
    var status = this.getExtensionState(this.extensionId);
    var basePath = Blockly.getMainWorkspace().options.pathToMedia;
    if (status == StatusButtonState.READY) {
      this.setImageSrc(basePath + "status-ready.svg");
    }
    if (status == StatusButtonState.NOT_READY) {
      this.setImageSrc(basePath + "status-not-ready.svg");
    }
  }

  /**
   * Set the source URL of the image for the button.
   * @param src New source.
   * @package
   */
  setImageSrc(src: string) {
    if (this.imageElement) {
      this.imageElement.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        src
      );
    }
  }

  /**
   * Gets the extension state. Overridden externally.
   * @param extensionId The ID of the extension in question.
   * @return The state of the extension.
   */
  getExtensionState(extensionId: string): StatusButtonState {
    return StatusButtonState.NOT_READY;
  }

  /**
   * Disposes of this status indicator label.
   */
  dispose() {
    Blockly.browserEvents.unbind(this.mouseUpWrapper);
    super.dispose();
  }
}

/**
 * Set of available states for a status indicator.
 */
export enum StatusButtonState {
  READY = "ready",
  NOT_READY = "not ready",
}