import Blockly from 'blockly';

Blockly.Blocks['.run'] = {
  init: function () {
    this.appendDummyInput().appendField('さんぽする');
    this.setInputsInline(false);
    //this.setPreviousStatement(true, null);
    this.setColour(240);
    this.setTooltip('さんぽする');
  },
};

Blockly.JavaScript['.run'] = function (block) {
  var code = 'さんぽする';
  return code;
};
Blockly.Blocks['.eat'] = {
  init: function () {
    this.appendDummyInput().appendField('をたべる');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setColour(240);
    this.setTooltip('をたべる');
  },
};

Blockly.JavaScript['.eat'] = function (block) {
  var code = 'たべる';
  return code;
};
Blockly.Blocks['.play'] = {
  init: function () {
    this.appendDummyInput().appendField('であそぶ');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setColour(240);
    this.setTooltip('であそぶ');
  },
};

Blockly.JavaScript['.play'] = function (block) {
  var code = 'であそぶ';
  return code;
};
Blockly.Blocks['.ride'] = {
  init: function () {
    this.appendDummyInput().appendField('にのる');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setColour(240);
    this.setTooltip('にのる');
  },
};

Blockly.JavaScript['.ride'] = function (block) {
  var code = 'にのる';
  return code;
};
Blockly.Blocks['.cook'] = {
  init: function () {
    this.appendDummyInput().appendField('をりょうりする');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setColour(240);
    this.setTooltip('をりょうりする');
  },
};

Blockly.JavaScript['.cook'] = function (block) {
  var code = 'をりょうりする';
  return code;
};
Blockly.Blocks['.getup'] = {
  init: function () {
    this.appendDummyInput().appendField('おきる');
    this.setInputsInline(false);
    //this.setPreviousStatement(true, null);
    this.setColour(240);
    this.setTooltip('おきる');
  },
};

Blockly.JavaScript['.getup'] = function (block) {
  var code = 'おきる';
  return code;
};
Blockly.Blocks['.sleep'] = {
  init: function () {
    this.appendDummyInput().appendField('ねる');
    this.setInputsInline(false);
    //this.setPreviousStatement(true, null);
    this.setColour(240);
    this.setTooltip('ねる');
  },
};

Blockly.JavaScript['.sleep'] = function (block) {
  var code = 'ねる';
  return code;
};
Blockly.Blocks['.buy'] = {
  init: function () {
    this.appendDummyInput().appendField('をかう');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setColour(240);
    this.setTooltip('をかう');
  },
};

Blockly.JavaScript['.buy'] = function (block) {
  var code = 'をかう';
  return code;
};
Blockly.Blocks['.practice'] = {
  init: function () {
    this.appendDummyInput().appendField('をれんしゅうする');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setColour(240);
    this.setTooltip('をれんしゅうする');
  },
};

Blockly.JavaScript['.practice'] = function (block) {
  var code = 'をれんしゅうする';
  return code;
};
Blockly.Blocks['.watch'] = {
  init: function () {
    this.appendDummyInput().appendField('をみる');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setColour(240);
    this.setTooltip('をみる');
  },
};

Blockly.JavaScript['.watch'] = function (block) {
  var code = 'をみる';
  return code;
};
Blockly.Blocks['.draw'] = {
  init: function () {
    this.appendDummyInput().appendField('をかく');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setColour(240);
    this.setTooltip('をえがく');
  },
};

Blockly.JavaScript['.draw'] = function (block) {
  var code = 'をえがく';
  return code;
};
Blockly.Blocks['.make'] = {
  init: function () {
    this.appendDummyInput().appendField('をつくる');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setColour(240);
    this.setTooltip('をつくる');
  },
};

Blockly.JavaScript['.make'] = function (block) {
  var code = 'をつくる';
  return code;
};
Blockly.Blocks['.study'] = {
  init: function () {
    this.appendDummyInput().appendField('べんきょうをする');
    this.setInputsInline(false);
    //this.setPreviousStatement(true, null);
    this.setColour(240);
    this.setTooltip('べんきょうをする');
  },
};

Blockly.JavaScript['.study'] = function (block) {
  var code = 'べんきょうをする';
  return code;
};
