gdjs.Menu_32SceneCode = {};
gdjs.Menu_32SceneCode.GDBackgroundObjects1= [];
gdjs.Menu_32SceneCode.GDBackgroundObjects2= [];
gdjs.Menu_32SceneCode.GDBackgroundObjects3= [];
gdjs.Menu_32SceneCode.GDTitleObjects1= [];
gdjs.Menu_32SceneCode.GDTitleObjects2= [];
gdjs.Menu_32SceneCode.GDTitleObjects3= [];
gdjs.Menu_32SceneCode.GDPlayerObjects1= [];
gdjs.Menu_32SceneCode.GDPlayerObjects2= [];
gdjs.Menu_32SceneCode.GDPlayerObjects3= [];
gdjs.Menu_32SceneCode.GDEnemyObjects1= [];
gdjs.Menu_32SceneCode.GDEnemyObjects2= [];
gdjs.Menu_32SceneCode.GDEnemyObjects3= [];
gdjs.Menu_32SceneCode.GDGoodObjects1= [];
gdjs.Menu_32SceneCode.GDGoodObjects2= [];
gdjs.Menu_32SceneCode.GDGoodObjects3= [];
gdjs.Menu_32SceneCode.GDBadObjects1= [];
gdjs.Menu_32SceneCode.GDBadObjects2= [];
gdjs.Menu_32SceneCode.GDBadObjects3= [];
gdjs.Menu_32SceneCode.GDPlayObjects1= [];
gdjs.Menu_32SceneCode.GDPlayObjects2= [];
gdjs.Menu_32SceneCode.GDPlayObjects3= [];
gdjs.Menu_32SceneCode.GDPlayerJumpObjects1= [];
gdjs.Menu_32SceneCode.GDPlayerJumpObjects2= [];
gdjs.Menu_32SceneCode.GDPlayerJumpObjects3= [];
gdjs.Menu_32SceneCode.GDPlayerSlideObjects1= [];
gdjs.Menu_32SceneCode.GDPlayerSlideObjects2= [];
gdjs.Menu_32SceneCode.GDPlayerSlideObjects3= [];
gdjs.Menu_32SceneCode.GDPlayerRunObjects1= [];
gdjs.Menu_32SceneCode.GDPlayerRunObjects2= [];
gdjs.Menu_32SceneCode.GDPlayerRunObjects3= [];
gdjs.Menu_32SceneCode.GDPlayerShootObjects1= [];
gdjs.Menu_32SceneCode.GDPlayerShootObjects2= [];
gdjs.Menu_32SceneCode.GDPlayerShootObjects3= [];
gdjs.Menu_32SceneCode.GDArrowObjects1= [];
gdjs.Menu_32SceneCode.GDArrowObjects2= [];
gdjs.Menu_32SceneCode.GDArrowObjects3= [];
gdjs.Menu_32SceneCode.GDSpaceObjects1= [];
gdjs.Menu_32SceneCode.GDSpaceObjects2= [];
gdjs.Menu_32SceneCode.GDSpaceObjects3= [];
gdjs.Menu_32SceneCode.GDPauseObjects1= [];
gdjs.Menu_32SceneCode.GDPauseObjects2= [];
gdjs.Menu_32SceneCode.GDPauseObjects3= [];
gdjs.Menu_32SceneCode.GDMuteObjects1= [];
gdjs.Menu_32SceneCode.GDMuteObjects2= [];
gdjs.Menu_32SceneCode.GDMuteObjects3= [];
gdjs.Menu_32SceneCode.GDMuteTextObjects1= [];
gdjs.Menu_32SceneCode.GDMuteTextObjects2= [];
gdjs.Menu_32SceneCode.GDMuteTextObjects3= [];
gdjs.Menu_32SceneCode.GDSkullObjects1= [];
gdjs.Menu_32SceneCode.GDSkullObjects2= [];
gdjs.Menu_32SceneCode.GDSkullObjects3= [];
gdjs.Menu_32SceneCode.GDHardModeObjects1= [];
gdjs.Menu_32SceneCode.GDHardModeObjects2= [];
gdjs.Menu_32SceneCode.GDHardModeObjects3= [];

gdjs.Menu_32SceneCode.conditionTrue_0 = {val:false};
gdjs.Menu_32SceneCode.condition0IsTrue_0 = {val:false};
gdjs.Menu_32SceneCode.condition1IsTrue_0 = {val:false};
gdjs.Menu_32SceneCode.condition2IsTrue_0 = {val:false};
gdjs.Menu_32SceneCode.condition3IsTrue_0 = {val:false};
gdjs.Menu_32SceneCode.conditionTrue_1 = {val:false};
gdjs.Menu_32SceneCode.condition0IsTrue_1 = {val:false};
gdjs.Menu_32SceneCode.condition1IsTrue_1 = {val:false};
gdjs.Menu_32SceneCode.condition2IsTrue_1 = {val:false};
gdjs.Menu_32SceneCode.condition3IsTrue_1 = {val:false};


gdjs.Menu_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Skull"), gdjs.Menu_32SceneCode.GDSkullObjects2);

gdjs.Menu_32SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Menu_32SceneCode.GDSkullObjects2.length;i<l;++i) {
    if ( !(gdjs.Menu_32SceneCode.GDSkullObjects2[i].isVisible()) ) {
        gdjs.Menu_32SceneCode.condition0IsTrue_0.val = true;
        gdjs.Menu_32SceneCode.GDSkullObjects2[k] = gdjs.Menu_32SceneCode.GDSkullObjects2[i];
        ++k;
    }
}
gdjs.Menu_32SceneCode.GDSkullObjects2.length = k;}if (gdjs.Menu_32SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Skull"), gdjs.Menu_32SceneCode.GDSkullObjects1);

gdjs.Menu_32SceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Menu_32SceneCode.GDSkullObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32SceneCode.GDSkullObjects1[i].isVisible() ) {
        gdjs.Menu_32SceneCode.condition0IsTrue_0.val = true;
        gdjs.Menu_32SceneCode.GDSkullObjects1[k] = gdjs.Menu_32SceneCode.GDSkullObjects1[i];
        ++k;
    }
}
gdjs.Menu_32SceneCode.GDSkullObjects1.length = k;}if (gdjs.Menu_32SceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1 (Hard)", false);
}}

}


};gdjs.Menu_32SceneCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.Menu_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Menu_32SceneCode.condition1IsTrue_0.val = false;
{
gdjs.Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.Menu_32SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Menu_32SceneCode.conditionTrue_1 = gdjs.Menu_32SceneCode.condition1IsTrue_0;
gdjs.Menu_32SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20802564);
}
}}
if (gdjs.Menu_32SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mute"), gdjs.Menu_32SceneCode.GDMuteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Skull"), gdjs.Menu_32SceneCode.GDSkullObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Text-Flash");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "428149__vdublin__saloon-piano-honky-tonk.wav", 1, true, 60, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "410370__ylearkisto__lannenelokuvan-tyylinen-pyssytaistelu-western-movie-style-gunbattle.wav", 2, true, 40, 1);
}{for(var i = 0, len = gdjs.Menu_32SceneCode.GDMuteObjects1.length ;i < len;++i) {
    gdjs.Menu_32SceneCode.GDMuteObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Menu_32SceneCode.GDSkullObjects1.length ;i < len;++i) {
    gdjs.Menu_32SceneCode.GDSkullObjects1[i].hide();
}
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
gdjs.Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Menu_32SceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Menu_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Menu_32SceneCode.condition0IsTrue_0.val = false;
{
gdjs.Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) == 1;
}if (gdjs.Menu_32SceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mute"), gdjs.Menu_32SceneCode.GDMuteObjects1);
{for(var i = 0, len = gdjs.Menu_32SceneCode.GDMuteObjects1.length ;i < len;++i) {
    gdjs.Menu_32SceneCode.GDMuteObjects1[i].hide(false);
}
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}}

}


{


gdjs.Menu_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Menu_32SceneCode.condition1IsTrue_0.val = false;
{
gdjs.Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) == 0;
}if ( gdjs.Menu_32SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Menu_32SceneCode.conditionTrue_1 = gdjs.Menu_32SceneCode.condition1IsTrue_0;
gdjs.Menu_32SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20776172);
}
}}
if (gdjs.Menu_32SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mute"), gdjs.Menu_32SceneCode.GDMuteObjects1);
{for(var i = 0, len = gdjs.Menu_32SceneCode.GDMuteObjects1.length ;i < len;++i) {
    gdjs.Menu_32SceneCode.GDMuteObjects1[i].hide();
}
}{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.continueSoundOnChannel(runtimeScene, 2);
}}

}


{


gdjs.Menu_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Menu_32SceneCode.condition1IsTrue_0.val = false;
gdjs.Menu_32SceneCode.condition2IsTrue_0.val = false;
{
gdjs.Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if ( gdjs.Menu_32SceneCode.condition0IsTrue_0.val ) {
{
gdjs.Menu_32SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) == 0;
}if ( gdjs.Menu_32SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.Menu_32SceneCode.conditionTrue_1 = gdjs.Menu_32SceneCode.condition2IsTrue_0;
gdjs.Menu_32SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20777260);
}
}}
}
if (gdjs.Menu_32SceneCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(1);
}}

}


{


gdjs.Menu_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Menu_32SceneCode.condition1IsTrue_0.val = false;
gdjs.Menu_32SceneCode.condition2IsTrue_0.val = false;
{
gdjs.Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "u");
}if ( gdjs.Menu_32SceneCode.condition0IsTrue_0.val ) {
{
gdjs.Menu_32SceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) == 1;
}if ( gdjs.Menu_32SceneCode.condition1IsTrue_0.val ) {
{
{gdjs.Menu_32SceneCode.conditionTrue_1 = gdjs.Menu_32SceneCode.condition2IsTrue_0;
gdjs.Menu_32SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20778252);
}
}}
}
if (gdjs.Menu_32SceneCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0);
}}

}


{



}


{


gdjs.Menu_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Menu_32SceneCode.condition1IsTrue_0.val = false;
{
gdjs.Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "h");
}if ( gdjs.Menu_32SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Menu_32SceneCode.conditionTrue_1 = gdjs.Menu_32SceneCode.condition1IsTrue_0;
gdjs.Menu_32SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20779508);
}
}}
if (gdjs.Menu_32SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Skull"), gdjs.Menu_32SceneCode.GDSkullObjects1);
{for(var i = 0, len = gdjs.Menu_32SceneCode.GDSkullObjects1.length ;i < len;++i) {
    gdjs.Menu_32SceneCode.GDSkullObjects1[i].hide(false);
}
}}

}


{


gdjs.Menu_32SceneCode.condition0IsTrue_0.val = false;
gdjs.Menu_32SceneCode.condition1IsTrue_0.val = false;
{
gdjs.Menu_32SceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "u");
}if ( gdjs.Menu_32SceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Menu_32SceneCode.conditionTrue_1 = gdjs.Menu_32SceneCode.condition1IsTrue_0;
gdjs.Menu_32SceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20780260);
}
}}
if (gdjs.Menu_32SceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Skull"), gdjs.Menu_32SceneCode.GDSkullObjects1);
{for(var i = 0, len = gdjs.Menu_32SceneCode.GDSkullObjects1.length ;i < len;++i) {
    gdjs.Menu_32SceneCode.GDSkullObjects1[i].hide();
}
}}

}


};

gdjs.Menu_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Menu_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Menu_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Menu_32SceneCode.GDBackgroundObjects3.length = 0;
gdjs.Menu_32SceneCode.GDTitleObjects1.length = 0;
gdjs.Menu_32SceneCode.GDTitleObjects2.length = 0;
gdjs.Menu_32SceneCode.GDTitleObjects3.length = 0;
gdjs.Menu_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Menu_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Menu_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Menu_32SceneCode.GDEnemyObjects1.length = 0;
gdjs.Menu_32SceneCode.GDEnemyObjects2.length = 0;
gdjs.Menu_32SceneCode.GDEnemyObjects3.length = 0;
gdjs.Menu_32SceneCode.GDGoodObjects1.length = 0;
gdjs.Menu_32SceneCode.GDGoodObjects2.length = 0;
gdjs.Menu_32SceneCode.GDGoodObjects3.length = 0;
gdjs.Menu_32SceneCode.GDBadObjects1.length = 0;
gdjs.Menu_32SceneCode.GDBadObjects2.length = 0;
gdjs.Menu_32SceneCode.GDBadObjects3.length = 0;
gdjs.Menu_32SceneCode.GDPlayObjects1.length = 0;
gdjs.Menu_32SceneCode.GDPlayObjects2.length = 0;
gdjs.Menu_32SceneCode.GDPlayObjects3.length = 0;
gdjs.Menu_32SceneCode.GDPlayerJumpObjects1.length = 0;
gdjs.Menu_32SceneCode.GDPlayerJumpObjects2.length = 0;
gdjs.Menu_32SceneCode.GDPlayerJumpObjects3.length = 0;
gdjs.Menu_32SceneCode.GDPlayerSlideObjects1.length = 0;
gdjs.Menu_32SceneCode.GDPlayerSlideObjects2.length = 0;
gdjs.Menu_32SceneCode.GDPlayerSlideObjects3.length = 0;
gdjs.Menu_32SceneCode.GDPlayerRunObjects1.length = 0;
gdjs.Menu_32SceneCode.GDPlayerRunObjects2.length = 0;
gdjs.Menu_32SceneCode.GDPlayerRunObjects3.length = 0;
gdjs.Menu_32SceneCode.GDPlayerShootObjects1.length = 0;
gdjs.Menu_32SceneCode.GDPlayerShootObjects2.length = 0;
gdjs.Menu_32SceneCode.GDPlayerShootObjects3.length = 0;
gdjs.Menu_32SceneCode.GDArrowObjects1.length = 0;
gdjs.Menu_32SceneCode.GDArrowObjects2.length = 0;
gdjs.Menu_32SceneCode.GDArrowObjects3.length = 0;
gdjs.Menu_32SceneCode.GDSpaceObjects1.length = 0;
gdjs.Menu_32SceneCode.GDSpaceObjects2.length = 0;
gdjs.Menu_32SceneCode.GDSpaceObjects3.length = 0;
gdjs.Menu_32SceneCode.GDPauseObjects1.length = 0;
gdjs.Menu_32SceneCode.GDPauseObjects2.length = 0;
gdjs.Menu_32SceneCode.GDPauseObjects3.length = 0;
gdjs.Menu_32SceneCode.GDMuteObjects1.length = 0;
gdjs.Menu_32SceneCode.GDMuteObjects2.length = 0;
gdjs.Menu_32SceneCode.GDMuteObjects3.length = 0;
gdjs.Menu_32SceneCode.GDMuteTextObjects1.length = 0;
gdjs.Menu_32SceneCode.GDMuteTextObjects2.length = 0;
gdjs.Menu_32SceneCode.GDMuteTextObjects3.length = 0;
gdjs.Menu_32SceneCode.GDSkullObjects1.length = 0;
gdjs.Menu_32SceneCode.GDSkullObjects2.length = 0;
gdjs.Menu_32SceneCode.GDSkullObjects3.length = 0;
gdjs.Menu_32SceneCode.GDHardModeObjects1.length = 0;
gdjs.Menu_32SceneCode.GDHardModeObjects2.length = 0;
gdjs.Menu_32SceneCode.GDHardModeObjects3.length = 0;

gdjs.Menu_32SceneCode.eventsList1(runtimeScene);
return;

}

gdjs['Menu_32SceneCode'] = gdjs.Menu_32SceneCode;
