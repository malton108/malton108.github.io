gdjs.Win_32Scene_321Code = {};
gdjs.Win_32Scene_321Code.GDBackgroundObjects1= [];
gdjs.Win_32Scene_321Code.GDBackgroundObjects2= [];
gdjs.Win_32Scene_321Code.GDChestObjects1= [];
gdjs.Win_32Scene_321Code.GDChestObjects2= [];
gdjs.Win_32Scene_321Code.GDPlayerObjects1= [];
gdjs.Win_32Scene_321Code.GDPlayerObjects2= [];
gdjs.Win_32Scene_321Code.GDwinObjects1= [];
gdjs.Win_32Scene_321Code.GDwinObjects2= [];
gdjs.Win_32Scene_321Code.GDrestartObjects1= [];
gdjs.Win_32Scene_321Code.GDrestartObjects2= [];
gdjs.Win_32Scene_321Code.GDMuteObjects1= [];
gdjs.Win_32Scene_321Code.GDMuteObjects2= [];
gdjs.Win_32Scene_321Code.GDMuteTextObjects1= [];
gdjs.Win_32Scene_321Code.GDMuteTextObjects2= [];

gdjs.Win_32Scene_321Code.conditionTrue_0 = {val:false};
gdjs.Win_32Scene_321Code.condition0IsTrue_0 = {val:false};
gdjs.Win_32Scene_321Code.condition1IsTrue_0 = {val:false};
gdjs.Win_32Scene_321Code.condition2IsTrue_0 = {val:false};
gdjs.Win_32Scene_321Code.condition3IsTrue_0 = {val:false};
gdjs.Win_32Scene_321Code.conditionTrue_1 = {val:false};
gdjs.Win_32Scene_321Code.condition0IsTrue_1 = {val:false};
gdjs.Win_32Scene_321Code.condition1IsTrue_1 = {val:false};
gdjs.Win_32Scene_321Code.condition2IsTrue_1 = {val:false};
gdjs.Win_32Scene_321Code.condition3IsTrue_1 = {val:false};


gdjs.Win_32Scene_321Code.eventsList0 = function(runtimeScene) {

{


gdjs.Win_32Scene_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Win_32Scene_321Code.conditionTrue_1 = gdjs.Win_32Scene_321Code.condition0IsTrue_0;
gdjs.Win_32Scene_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(24189404);
}
}if (gdjs.Win_32Scene_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mute"), gdjs.Win_32Scene_321Code.GDMuteObjects1);
{for(var i = 0, len = gdjs.Win_32Scene_321Code.GDMuteObjects1.length ;i < len;++i) {
    gdjs.Win_32Scene_321Code.GDMuteObjects1[i].hide();
}
}}

}


};gdjs.Win_32Scene_321Code.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.Win_32Scene_321Code.condition0IsTrue_0.val = false;
{
gdjs.Win_32Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Win_32Scene_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "321022__littlerobotsoundfactory__loop-nothing-can-stop-progress-09.wav", 1, true, 60, 1);
}
{ //Subevents
gdjs.Win_32Scene_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Win_32Scene_321Code.condition0IsTrue_0.val = false;
{
gdjs.Win_32Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.Win_32Scene_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", true);
}}

}


{



}


{


gdjs.Win_32Scene_321Code.condition0IsTrue_0.val = false;
{
gdjs.Win_32Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) == 1;
}if (gdjs.Win_32Scene_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mute"), gdjs.Win_32Scene_321Code.GDMuteObjects1);
{for(var i = 0, len = gdjs.Win_32Scene_321Code.GDMuteObjects1.length ;i < len;++i) {
    gdjs.Win_32Scene_321Code.GDMuteObjects1[i].hide(false);
}
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


{


gdjs.Win_32Scene_321Code.condition0IsTrue_0.val = false;
{
gdjs.Win_32Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) == 0;
}if (gdjs.Win_32Scene_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mute"), gdjs.Win_32Scene_321Code.GDMuteObjects1);
{for(var i = 0, len = gdjs.Win_32Scene_321Code.GDMuteObjects1.length ;i < len;++i) {
    gdjs.Win_32Scene_321Code.GDMuteObjects1[i].hide();
}
}{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 1);
}}

}


{


gdjs.Win_32Scene_321Code.condition0IsTrue_0.val = false;
gdjs.Win_32Scene_321Code.condition1IsTrue_0.val = false;
gdjs.Win_32Scene_321Code.condition2IsTrue_0.val = false;
{
gdjs.Win_32Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if ( gdjs.Win_32Scene_321Code.condition0IsTrue_0.val ) {
{
gdjs.Win_32Scene_321Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) == 0;
}if ( gdjs.Win_32Scene_321Code.condition1IsTrue_0.val ) {
{
{gdjs.Win_32Scene_321Code.conditionTrue_1 = gdjs.Win_32Scene_321Code.condition2IsTrue_0;
gdjs.Win_32Scene_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(24193020);
}
}}
}
if (gdjs.Win_32Scene_321Code.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(1);
}}

}


{


gdjs.Win_32Scene_321Code.condition0IsTrue_0.val = false;
gdjs.Win_32Scene_321Code.condition1IsTrue_0.val = false;
gdjs.Win_32Scene_321Code.condition2IsTrue_0.val = false;
{
gdjs.Win_32Scene_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "u");
}if ( gdjs.Win_32Scene_321Code.condition0IsTrue_0.val ) {
{
gdjs.Win_32Scene_321Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) == 1;
}if ( gdjs.Win_32Scene_321Code.condition1IsTrue_0.val ) {
{
{gdjs.Win_32Scene_321Code.conditionTrue_1 = gdjs.Win_32Scene_321Code.condition2IsTrue_0;
gdjs.Win_32Scene_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(24194132);
}
}}
}
if (gdjs.Win_32Scene_321Code.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0);
}}

}


};

gdjs.Win_32Scene_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Win_32Scene_321Code.GDBackgroundObjects1.length = 0;
gdjs.Win_32Scene_321Code.GDBackgroundObjects2.length = 0;
gdjs.Win_32Scene_321Code.GDChestObjects1.length = 0;
gdjs.Win_32Scene_321Code.GDChestObjects2.length = 0;
gdjs.Win_32Scene_321Code.GDPlayerObjects1.length = 0;
gdjs.Win_32Scene_321Code.GDPlayerObjects2.length = 0;
gdjs.Win_32Scene_321Code.GDwinObjects1.length = 0;
gdjs.Win_32Scene_321Code.GDwinObjects2.length = 0;
gdjs.Win_32Scene_321Code.GDrestartObjects1.length = 0;
gdjs.Win_32Scene_321Code.GDrestartObjects2.length = 0;
gdjs.Win_32Scene_321Code.GDMuteObjects1.length = 0;
gdjs.Win_32Scene_321Code.GDMuteObjects2.length = 0;
gdjs.Win_32Scene_321Code.GDMuteTextObjects1.length = 0;
gdjs.Win_32Scene_321Code.GDMuteTextObjects2.length = 0;

gdjs.Win_32Scene_321Code.eventsList1(runtimeScene);
return;

}

gdjs['Win_32Scene_321Code'] = gdjs.Win_32Scene_321Code;
