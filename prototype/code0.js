gdjs.Menu_32SceneCode = {};
gdjs.Menu_32SceneCode.GDBackgroundObjects1= [];
gdjs.Menu_32SceneCode.GDBackgroundObjects2= [];
gdjs.Menu_32SceneCode.GDTitleObjects1= [];
gdjs.Menu_32SceneCode.GDTitleObjects2= [];
gdjs.Menu_32SceneCode.GDPlayerObjects1= [];
gdjs.Menu_32SceneCode.GDPlayerObjects2= [];
gdjs.Menu_32SceneCode.GDEnemyObjects1= [];
gdjs.Menu_32SceneCode.GDEnemyObjects2= [];
gdjs.Menu_32SceneCode.GDGoodObjects1= [];
gdjs.Menu_32SceneCode.GDGoodObjects2= [];
gdjs.Menu_32SceneCode.GDBadObjects1= [];
gdjs.Menu_32SceneCode.GDBadObjects2= [];
gdjs.Menu_32SceneCode.GDPlayObjects1= [];
gdjs.Menu_32SceneCode.GDPlayObjects2= [];
gdjs.Menu_32SceneCode.GDPlayerJumpObjects1= [];
gdjs.Menu_32SceneCode.GDPlayerJumpObjects2= [];
gdjs.Menu_32SceneCode.GDPlayerSlideObjects1= [];
gdjs.Menu_32SceneCode.GDPlayerSlideObjects2= [];
gdjs.Menu_32SceneCode.GDPlayerRunObjects1= [];
gdjs.Menu_32SceneCode.GDPlayerRunObjects2= [];
gdjs.Menu_32SceneCode.GDPlayerShootObjects1= [];
gdjs.Menu_32SceneCode.GDPlayerShootObjects2= [];
gdjs.Menu_32SceneCode.GDArrowObjects1= [];
gdjs.Menu_32SceneCode.GDArrowObjects2= [];
gdjs.Menu_32SceneCode.GDSpaceObjects1= [];
gdjs.Menu_32SceneCode.GDSpaceObjects2= [];

gdjs.Menu_32SceneCode.conditionTrue_0 = {val:false};
gdjs.Menu_32SceneCode.condition0IsTrue_0 = {val:false};
gdjs.Menu_32SceneCode.condition1IsTrue_0 = {val:false};


gdjs.Menu_32SceneCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.Menu_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Menu_32SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Text-Flash");
}{gdjs.evtTools.sound.playSound(runtimeScene, "428149__vdublin__saloon-piano-honky-tonk.wav", true, 60, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "410370__ylearkisto__lannenelokuvan-tyylinen-pyssytaistelu-western-movie-style-gunbattle.wav", true, 40, 1);
}}

}


{


gdjs.Menu_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Menu_32SceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.4, "Text-Flash"));
}if (gdjs.Menu_32SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.Menu_32SceneCode.GDPlayObjects1);
{for(var i = 0, len = gdjs.Menu_32SceneCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.Menu_32SceneCode.GDPlayObjects1[i].hide();
}
}}

}


{


gdjs.Menu_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.4, "Text-Flash");
}if (gdjs.Menu_32SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.Menu_32SceneCode.GDPlayObjects1);
{for(var i = 0, len = gdjs.Menu_32SceneCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.Menu_32SceneCode.GDPlayObjects1[i].hide(false);
}
}}

}


{


gdjs.Menu_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.8, "Text-Flash");
}if (gdjs.Menu_32SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Text-Flash");
}}

}


{



}


{


gdjs.Menu_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.Menu_32SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Base Scene", true);
}}

}


};

gdjs.Menu_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Menu_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Menu_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Menu_32SceneCode.GDTitleObjects1.length = 0;
gdjs.Menu_32SceneCode.GDTitleObjects2.length = 0;
gdjs.Menu_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Menu_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Menu_32SceneCode.GDEnemyObjects1.length = 0;
gdjs.Menu_32SceneCode.GDEnemyObjects2.length = 0;
gdjs.Menu_32SceneCode.GDGoodObjects1.length = 0;
gdjs.Menu_32SceneCode.GDGoodObjects2.length = 0;
gdjs.Menu_32SceneCode.GDBadObjects1.length = 0;
gdjs.Menu_32SceneCode.GDBadObjects2.length = 0;
gdjs.Menu_32SceneCode.GDPlayObjects1.length = 0;
gdjs.Menu_32SceneCode.GDPlayObjects2.length = 0;
gdjs.Menu_32SceneCode.GDPlayerJumpObjects1.length = 0;
gdjs.Menu_32SceneCode.GDPlayerJumpObjects2.length = 0;
gdjs.Menu_32SceneCode.GDPlayerSlideObjects1.length = 0;
gdjs.Menu_32SceneCode.GDPlayerSlideObjects2.length = 0;
gdjs.Menu_32SceneCode.GDPlayerRunObjects1.length = 0;
gdjs.Menu_32SceneCode.GDPlayerRunObjects2.length = 0;
gdjs.Menu_32SceneCode.GDPlayerShootObjects1.length = 0;
gdjs.Menu_32SceneCode.GDPlayerShootObjects2.length = 0;
gdjs.Menu_32SceneCode.GDArrowObjects1.length = 0;
gdjs.Menu_32SceneCode.GDArrowObjects2.length = 0;
gdjs.Menu_32SceneCode.GDSpaceObjects1.length = 0;
gdjs.Menu_32SceneCode.GDSpaceObjects2.length = 0;

gdjs.Menu_32SceneCode.eventsList0(runtimeScene);
return;

}

gdjs['Menu_32SceneCode'] = gdjs.Menu_32SceneCode;
