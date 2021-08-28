import Blockly from 'blockly';

Blockly.Blocks['.sleep'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("寝る");
      this.setOutput(false);
      this.setColour(230);
      this.setTooltip("ねる");
    }
};

Blockly.JavaScript['.sleep'] = function(block) {
  var code = '寝る';
  return code;
};

Blockly.Blocks['.eat'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("を食べる");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setColour(230);
   this.setTooltip("たべる");
    }
  };

Blockly.JavaScript['.eat'] = function(block) {
  var code = 'を食べる';
  return code;
};

Blockly.Blocks['.play'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("で遊ぶ");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("であそぶ");
  }
};

Blockly.JavaScript['.play'] = function(block) {
var code = 'で遊ぶ';
return code;
};

Blockly.Blocks['.ride'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("に乗る");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("にのる");
  }
};

Blockly.JavaScript['.ride'] = function(block) {
var code = 'に乗る';
return code;
};