gdjs.Win_32SceneCode = {};
gdjs.Win_32SceneCode.GDBackgroundObjects1= [];
gdjs.Win_32SceneCode.GDBackgroundObjects2= [];
gdjs.Win_32SceneCode.GDChestObjects1= [];
gdjs.Win_32SceneCode.GDChestObjects2= [];
gdjs.Win_32SceneCode.GDPlayerObjects1= [];
gdjs.Win_32SceneCode.GDPlayerObjects2= [];
gdjs.Win_32SceneCode.GDwinObjects1= [];
gdjs.Win_32SceneCode.GDwinObjects2= [];
gdjs.Win_32SceneCode.GDrestartObjects1= [];
gdjs.Win_32SceneCode.GDrestartObjects2= [];

gdjs.Win_32SceneCode.conditionTrue_0 = {val:false};
gdjs.Win_32SceneCode.condition0IsTrue_0 = {val:false};
gdjs.Win_32SceneCode.condition1IsTrue_0 = {val:false};
gdjs.Win_32SceneCode.conditionTrue_1 = {val:false};
gdjs.Win_32SceneCode.condition0IsTrue_1 = {val:false};
gdjs.Win_32SceneCode.condition1IsTrue_1 = {val:false};


gdjs.Win_32SceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Win_32SceneCode.condition0IsTrue_0.val = false;
{
{gdjs.Win_32SceneCode.conditionTrue_1 = gdjs.Win_32SceneCode.condition0IsTrue_0;
gdjs.Win_32SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10912268);
}
}if (gdjs.Win_32SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "277021__sandermotions__applause-2.wav", true, 30, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "371339__johanneskristjansson__cheer-crowd.mp3", true, 30, 1);
}}

}


};gdjs.Win_32SceneCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.Win_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Win_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Win_32SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "321022__littlerobotsoundfactory__loop-nothing-can-stop-progress-09.wav", true, 60, 1);
}
{ //Subevents
gdjs.Win_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Win_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Win_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Win_32SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu Scene", true);
}}

}


};

gdjs.Win_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Win_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Win_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Win_32SceneCode.GDChestObjects1.length = 0;
gdjs.Win_32SceneCode.GDChestObjects2.length = 0;
gdjs.Win_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Win_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Win_32SceneCode.GDwinObjects1.length = 0;
gdjs.Win_32SceneCode.GDwinObjects2.length = 0;
gdjs.Win_32SceneCode.GDrestartObjects1.length = 0;
gdjs.Win_32SceneCode.GDrestartObjects2.length = 0;

gdjs.Win_32SceneCode.eventsList1(runtimeScene);
return;

}

gdjs['Win_32SceneCode'] = gdjs.Win_32SceneCode;
