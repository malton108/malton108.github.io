gdjs.Win_32Scene_322_32_40Hard_41Code = {};
gdjs.Win_32Scene_322_32_40Hard_41Code.GDBackgroundObjects1= [];
gdjs.Win_32Scene_322_32_40Hard_41Code.GDBackgroundObjects2= [];
gdjs.Win_32Scene_322_32_40Hard_41Code.GDChestObjects1= [];
gdjs.Win_32Scene_322_32_40Hard_41Code.GDChestObjects2= [];
gdjs.Win_32Scene_322_32_40Hard_41Code.GDPlayerObjects1= [];
gdjs.Win_32Scene_322_32_40Hard_41Code.GDPlayerObjects2= [];
gdjs.Win_32Scene_322_32_40Hard_41Code.GDwinObjects1= [];
gdjs.Win_32Scene_322_32_40Hard_41Code.GDwinObjects2= [];
gdjs.Win_32Scene_322_32_40Hard_41Code.GDrestartObjects1= [];
gdjs.Win_32Scene_322_32_40Hard_41Code.GDrestartObjects2= [];
gdjs.Win_32Scene_322_32_40Hard_41Code.GDMuteObjects1= [];
gdjs.Win_32Scene_322_32_40Hard_41Code.GDMuteObjects2= [];
gdjs.Win_32Scene_322_32_40Hard_41Code.GDMuteTextObjects1= [];
gdjs.Win_32Scene_322_32_40Hard_41Code.GDMuteTextObjects2= [];
gdjs.Win_32Scene_322_32_40Hard_41Code.GDSkullObjects1= [];
gdjs.Win_32Scene_322_32_40Hard_41Code.GDSkullObjects2= [];

gdjs.Win_32Scene_322_32_40Hard_41Code.conditionTrue_0 = {val:false};
gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_0 = {val:false};
gdjs.Win_32Scene_322_32_40Hard_41Code.condition1IsTrue_0 = {val:false};
gdjs.Win_32Scene_322_32_40Hard_41Code.condition2IsTrue_0 = {val:false};
gdjs.Win_32Scene_322_32_40Hard_41Code.condition3IsTrue_0 = {val:false};
gdjs.Win_32Scene_322_32_40Hard_41Code.conditionTrue_1 = {val:false};
gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_1 = {val:false};
gdjs.Win_32Scene_322_32_40Hard_41Code.condition1IsTrue_1 = {val:false};
gdjs.Win_32Scene_322_32_40Hard_41Code.condition2IsTrue_1 = {val:false};
gdjs.Win_32Scene_322_32_40Hard_41Code.condition3IsTrue_1 = {val:false};


gdjs.Win_32Scene_322_32_40Hard_41Code.eventsList0 = function(runtimeScene) {

{


gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_0.val = false;
{
{gdjs.Win_32Scene_322_32_40Hard_41Code.conditionTrue_1 = gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_0;
gdjs.Win_32Scene_322_32_40Hard_41Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(24149420);
}
}if (gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mute"), gdjs.Win_32Scene_322_32_40Hard_41Code.GDMuteObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "277021__sandermotions__applause-2.wav", 2, true, 30, 1);
}{for(var i = 0, len = gdjs.Win_32Scene_322_32_40Hard_41Code.GDMuteObjects1.length ;i < len;++i) {
    gdjs.Win_32Scene_322_32_40Hard_41Code.GDMuteObjects1[i].hide();
}
}}

}


};gdjs.Win_32Scene_322_32_40Hard_41Code.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_0.val = false;
{
gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "321022__littlerobotsoundfactory__loop-nothing-can-stop-progress-09.wav", 1, true, 60, 1);
}
{ //Subevents
gdjs.Win_32Scene_322_32_40Hard_41Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_0.val = false;
{
gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3 (Hard)", true);
}}

}


{



}


{


gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_0.val = false;
{
gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) == 1;
}if (gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mute"), gdjs.Win_32Scene_322_32_40Hard_41Code.GDMuteObjects1);
{for(var i = 0, len = gdjs.Win_32Scene_322_32_40Hard_41Code.GDMuteObjects1.length ;i < len;++i) {
    gdjs.Win_32Scene_322_32_40Hard_41Code.GDMuteObjects1[i].hide(false);
}
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}}

}


{


gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_0.val = false;
{
gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) == 0;
}if (gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mute"), gdjs.Win_32Scene_322_32_40Hard_41Code.GDMuteObjects1);
{for(var i = 0, len = gdjs.Win_32Scene_322_32_40Hard_41Code.GDMuteObjects1.length ;i < len;++i) {
    gdjs.Win_32Scene_322_32_40Hard_41Code.GDMuteObjects1[i].hide();
}
}{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 2);
}}

}


{


gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_0.val = false;
gdjs.Win_32Scene_322_32_40Hard_41Code.condition1IsTrue_0.val = false;
gdjs.Win_32Scene_322_32_40Hard_41Code.condition2IsTrue_0.val = false;
{
gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if ( gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_0.val ) {
{
gdjs.Win_32Scene_322_32_40Hard_41Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) == 0;
}if ( gdjs.Win_32Scene_322_32_40Hard_41Code.condition1IsTrue_0.val ) {
{
{gdjs.Win_32Scene_322_32_40Hard_41Code.conditionTrue_1 = gdjs.Win_32Scene_322_32_40Hard_41Code.condition2IsTrue_0;
gdjs.Win_32Scene_322_32_40Hard_41Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(24154404);
}
}}
}
if (gdjs.Win_32Scene_322_32_40Hard_41Code.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(1);
}}

}


{


gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_0.val = false;
gdjs.Win_32Scene_322_32_40Hard_41Code.condition1IsTrue_0.val = false;
gdjs.Win_32Scene_322_32_40Hard_41Code.condition2IsTrue_0.val = false;
{
gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "u");
}if ( gdjs.Win_32Scene_322_32_40Hard_41Code.condition0IsTrue_0.val ) {
{
gdjs.Win_32Scene_322_32_40Hard_41Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) == 1;
}if ( gdjs.Win_32Scene_322_32_40Hard_41Code.condition1IsTrue_0.val ) {
{
{gdjs.Win_32Scene_322_32_40Hard_41Code.conditionTrue_1 = gdjs.Win_32Scene_322_32_40Hard_41Code.condition2IsTrue_0;
gdjs.Win_32Scene_322_32_40Hard_41Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(24155516);
}
}}
}
if (gdjs.Win_32Scene_322_32_40Hard_41Code.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0);
}}

}


};

gdjs.Win_32Scene_322_32_40Hard_41Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Win_32Scene_322_32_40Hard_41Code.GDBackgroundObjects1.length = 0;
gdjs.Win_32Scene_322_32_40Hard_41Code.GDBackgroundObjects2.length = 0;
gdjs.Win_32Scene_322_32_40Hard_41Code.GDChestObjects1.length = 0;
gdjs.Win_32Scene_322_32_40Hard_41Code.GDChestObjects2.length = 0;
gdjs.Win_32Scene_322_32_40Hard_41Code.GDPlayerObjects1.length = 0;
gdjs.Win_32Scene_322_32_40Hard_41Code.GDPlayerObjects2.length = 0;
gdjs.Win_32Scene_322_32_40Hard_41Code.GDwinObjects1.length = 0;
gdjs.Win_32Scene_322_32_40Hard_41Code.GDwinObjects2.length = 0;
gdjs.Win_32Scene_322_32_40Hard_41Code.GDrestartObjects1.length = 0;
gdjs.Win_32Scene_322_32_40Hard_41Code.GDrestartObjects2.length = 0;
gdjs.Win_32Scene_322_32_40Hard_41Code.GDMuteObjects1.length = 0;
gdjs.Win_32Scene_322_32_40Hard_41Code.GDMuteObjects2.length = 0;
gdjs.Win_32Scene_322_32_40Hard_41Code.GDMuteTextObjects1.length = 0;
gdjs.Win_32Scene_322_32_40Hard_41Code.GDMuteTextObjects2.length = 0;
gdjs.Win_32Scene_322_32_40Hard_41Code.GDSkullObjects1.length = 0;
gdjs.Win_32Scene_322_32_40Hard_41Code.GDSkullObjects2.length = 0;

gdjs.Win_32Scene_322_32_40Hard_41Code.eventsList1(runtimeScene);
return;

}

gdjs['Win_32Scene_322_32_40Hard_41Code'] = gdjs.Win_32Scene_322_32_40Hard_41Code;
