gdjs.Win_32Scene_323Code = {};
gdjs.Win_32Scene_323Code.GDBackgroundObjects1= [];
gdjs.Win_32Scene_323Code.GDBackgroundObjects2= [];
gdjs.Win_32Scene_323Code.GDChestObjects1= [];
gdjs.Win_32Scene_323Code.GDChestObjects2= [];
gdjs.Win_32Scene_323Code.GDPlayerObjects1= [];
gdjs.Win_32Scene_323Code.GDPlayerObjects2= [];
gdjs.Win_32Scene_323Code.GDwinObjects1= [];
gdjs.Win_32Scene_323Code.GDwinObjects2= [];
gdjs.Win_32Scene_323Code.GDrestartObjects1= [];
gdjs.Win_32Scene_323Code.GDrestartObjects2= [];
gdjs.Win_32Scene_323Code.GDMuteObjects1= [];
gdjs.Win_32Scene_323Code.GDMuteObjects2= [];
gdjs.Win_32Scene_323Code.GDMuteTextObjects1= [];
gdjs.Win_32Scene_323Code.GDMuteTextObjects2= [];

gdjs.Win_32Scene_323Code.conditionTrue_0 = {val:false};
gdjs.Win_32Scene_323Code.condition0IsTrue_0 = {val:false};
gdjs.Win_32Scene_323Code.condition1IsTrue_0 = {val:false};
gdjs.Win_32Scene_323Code.condition2IsTrue_0 = {val:false};
gdjs.Win_32Scene_323Code.condition3IsTrue_0 = {val:false};
gdjs.Win_32Scene_323Code.conditionTrue_1 = {val:false};
gdjs.Win_32Scene_323Code.condition0IsTrue_1 = {val:false};
gdjs.Win_32Scene_323Code.condition1IsTrue_1 = {val:false};
gdjs.Win_32Scene_323Code.condition2IsTrue_1 = {val:false};
gdjs.Win_32Scene_323Code.condition3IsTrue_1 = {val:false};


gdjs.Win_32Scene_323Code.eventsList0 = function(runtimeScene) {

{


gdjs.Win_32Scene_323Code.condition0IsTrue_0.val = false;
{
{gdjs.Win_32Scene_323Code.conditionTrue_1 = gdjs.Win_32Scene_323Code.condition0IsTrue_0;
gdjs.Win_32Scene_323Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(24142332);
}
}if (gdjs.Win_32Scene_323Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mute"), gdjs.Win_32Scene_323Code.GDMuteObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "277021__sandermotions__applause-2.wav", 2, true, 30, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "371339__johanneskristjansson__cheer-crowd.mp3", 3, true, 30, 1);
}{for(var i = 0, len = gdjs.Win_32Scene_323Code.GDMuteObjects1.length ;i < len;++i) {
    gdjs.Win_32Scene_323Code.GDMuteObjects1[i].hide();
}
}}

}


};gdjs.Win_32Scene_323Code.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.Win_32Scene_323Code.condition0IsTrue_0.val = false;
{
gdjs.Win_32Scene_323Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Win_32Scene_323Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "321022__littlerobotsoundfactory__loop-nothing-can-stop-progress-09.wav", 1, true, 60, 1);
}
{ //Subevents
gdjs.Win_32Scene_323Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Win_32Scene_323Code.condition0IsTrue_0.val = false;
{
gdjs.Win_32Scene_323Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.Win_32Scene_323Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu Scene", true);
}}

}


{



}


{


gdjs.Win_32Scene_323Code.condition0IsTrue_0.val = false;
{
gdjs.Win_32Scene_323Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) == 1;
}if (gdjs.Win_32Scene_323Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mute"), gdjs.Win_32Scene_323Code.GDMuteObjects1);
{for(var i = 0, len = gdjs.Win_32Scene_323Code.GDMuteObjects1.length ;i < len;++i) {
    gdjs.Win_32Scene_323Code.GDMuteObjects1[i].hide(false);
}
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 3);
}}

}


{


gdjs.Win_32Scene_323Code.condition0IsTrue_0.val = false;
gdjs.Win_32Scene_323Code.condition1IsTrue_0.val = false;
{
gdjs.Win_32Scene_323Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) == 0;
}if ( gdjs.Win_32Scene_323Code.condition0IsTrue_0.val ) {
{
{gdjs.Win_32Scene_323Code.conditionTrue_1 = gdjs.Win_32Scene_323Code.condition1IsTrue_0;
gdjs.Win_32Scene_323Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(24147020);
}
}}
if (gdjs.Win_32Scene_323Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mute"), gdjs.Win_32Scene_323Code.GDMuteObjects1);
{for(var i = 0, len = gdjs.Win_32Scene_323Code.GDMuteObjects1.length ;i < len;++i) {
    gdjs.Win_32Scene_323Code.GDMuteObjects1[i].hide();
}
}{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 2);
}{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 3);
}}

}


{


gdjs.Win_32Scene_323Code.condition0IsTrue_0.val = false;
gdjs.Win_32Scene_323Code.condition1IsTrue_0.val = false;
gdjs.Win_32Scene_323Code.condition2IsTrue_0.val = false;
{
gdjs.Win_32Scene_323Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if ( gdjs.Win_32Scene_323Code.condition0IsTrue_0.val ) {
{
gdjs.Win_32Scene_323Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) == 0;
}if ( gdjs.Win_32Scene_323Code.condition1IsTrue_0.val ) {
{
{gdjs.Win_32Scene_323Code.conditionTrue_1 = gdjs.Win_32Scene_323Code.condition2IsTrue_0;
gdjs.Win_32Scene_323Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(24148900);
}
}}
}
if (gdjs.Win_32Scene_323Code.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(1);
}}

}


{


gdjs.Win_32Scene_323Code.condition0IsTrue_0.val = false;
gdjs.Win_32Scene_323Code.condition1IsTrue_0.val = false;
gdjs.Win_32Scene_323Code.condition2IsTrue_0.val = false;
{
gdjs.Win_32Scene_323Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "u");
}if ( gdjs.Win_32Scene_323Code.condition0IsTrue_0.val ) {
{
gdjs.Win_32Scene_323Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) == 1;
}if ( gdjs.Win_32Scene_323Code.condition1IsTrue_0.val ) {
{
{gdjs.Win_32Scene_323Code.conditionTrue_1 = gdjs.Win_32Scene_323Code.condition2IsTrue_0;
gdjs.Win_32Scene_323Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(24150012);
}
}}
}
if (gdjs.Win_32Scene_323Code.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0);
}}

}


};

gdjs.Win_32Scene_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Win_32Scene_323Code.GDBackgroundObjects1.length = 0;
gdjs.Win_32Scene_323Code.GDBackgroundObjects2.length = 0;
gdjs.Win_32Scene_323Code.GDChestObjects1.length = 0;
gdjs.Win_32Scene_323Code.GDChestObjects2.length = 0;
gdjs.Win_32Scene_323Code.GDPlayerObjects1.length = 0;
gdjs.Win_32Scene_323Code.GDPlayerObjects2.length = 0;
gdjs.Win_32Scene_323Code.GDwinObjects1.length = 0;
gdjs.Win_32Scene_323Code.GDwinObjects2.length = 0;
gdjs.Win_32Scene_323Code.GDrestartObjects1.length = 0;
gdjs.Win_32Scene_323Code.GDrestartObjects2.length = 0;
gdjs.Win_32Scene_323Code.GDMuteObjects1.length = 0;
gdjs.Win_32Scene_323Code.GDMuteObjects2.length = 0;
gdjs.Win_32Scene_323Code.GDMuteTextObjects1.length = 0;
gdjs.Win_32Scene_323Code.GDMuteTextObjects2.length = 0;

gdjs.Win_32Scene_323Code.eventsList1(runtimeScene);
return;

}

gdjs['Win_32Scene_323Code'] = gdjs.Win_32Scene_323Code;
