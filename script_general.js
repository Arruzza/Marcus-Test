(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"propagateClick":false,"scripts":{"cloneBindings":TDV.Tour.Script.cloneBindings,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setLocale":TDV.Tour.Script.setLocale,"initQuiz":TDV.Tour.Script.initQuiz,"registerKey":TDV.Tour.Script.registerKey,"unregisterKey":TDV.Tour.Script.unregisterKey,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"openLink":TDV.Tour.Script.openLink,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"startMeasurement":TDV.Tour.Script.startMeasurement,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"executeJS":TDV.Tour.Script.executeJS,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getPixels":TDV.Tour.Script.getPixels,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"mixObject":TDV.Tour.Script.mixObject,"setValue":TDV.Tour.Script.setValue,"initAnalytics":TDV.Tour.Script.initAnalytics,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getComponentByName":TDV.Tour.Script.getComponentByName,"init":TDV.Tour.Script.init,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"historyGoBack":TDV.Tour.Script.historyGoBack,"resumePlayers":TDV.Tour.Script.resumePlayers,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getKey":TDV.Tour.Script.getKey,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"shareSocial":TDV.Tour.Script.shareSocial,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"downloadFile":TDV.Tour.Script.downloadFile,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getMainViewer":TDV.Tour.Script.getMainViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"toggleVR":TDV.Tour.Script.toggleVR,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"isPanorama":TDV.Tour.Script.isPanorama,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizFinish":TDV.Tour.Script.quizFinish,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getOverlays":TDV.Tour.Script.getOverlays,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"quizStart":TDV.Tour.Script.quizStart,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"clone":TDV.Tour.Script.clone,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"disableVR":TDV.Tour.Script.disableVR,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"createTween":TDV.Tour.Script.createTween,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"enableVR":TDV.Tour.Script.enableVR,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"playAudioList":TDV.Tour.Script.playAudioList,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"textToSpeech":TDV.Tour.Script.textToSpeech,"existsKey":TDV.Tour.Script.existsKey,"getMediaByName":TDV.Tour.Script.getMediaByName,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"showWindow":TDV.Tour.Script.showWindow,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setMapLocation":TDV.Tour.Script.setMapLocation,"translate":TDV.Tour.Script.translate,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags},"scrollBarColor":"#000000","start":"this.init()","id":"rootPlayer","data":{"history":{},"displayTooltipInTouchScreens":true,"defaultLocale":"en","locales":{"en":"locale/en.txt"},"name":"Player479","textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"volume":1,"stopBackgroundAudio":false,"speechOnTooltip":false,"speechOnInfoWindow":false,"rate":1}},"children":["this.MainViewer","this.Container_F048D710_C230_4582_41E6_EF75A385AA72"],"backgroundColor":["#FFFFFF"],"hash": "c99ae9ad1b3f5061348110b95dc8d7c3df4a4a2f2807c58e8282e61f614b3e49", "definitions": [{"propagateClick":false,"children":["this.Button_F29AEDC6_C230_C48E_41E5_9F07D0D93E66","this.Button_F6843ACF_C231_CC9E_41E6_07DB31EA8EA6","this.Button_F6CAEDD7_C230_448E_41D4_F880B3D15FD4"],"scrollBarColor":"#000000","bottom":"32.88%","overflow":"scroll","id":"Container_F048D710_C230_4582_41E6_EF75A385AA72","data":{"name":"Container2642"},"right":"12.75%","backgroundColor":["#FFFFFF","#FFFFFF"],"backgroundOpacity":0.3,"layout":"absolute","scrollBarMargin":2,"class":"Container","backgroundColorRatios":[0,1],"width":"12.613%","minWidth":20,"minHeight":20,"gap":10,"height":"29.973%"},{"verticalAlign":"middle","borderColor":"#000000","rollOverBackgroundColorRatios":[0],"rollOverBackgroundColor":["#DB9B4D"],"top":"37.9%","pressedFontColor":"#000000","id":"Button_F6843ACF_C231_CC9E_41E6_07DB31EA8EA6","rollOverBackgroundOpacity":0,"left":"0.13%","paddingLeft":0,"click":"this.cleanAllMeasurements(null)","pressedBackgroundOpacity":0,"backgroundColor":["#000000"],"fontFamily":"Cinzel Bold","iconWidth":0,"data":{"name":"Button house info"},"paddingRight":0,"pressedBackgroundColor":["#DB9B4D"],"fontWeight":"bold","backgroundOpacity":0,"tabIndex":0,"rollOverFontColor":"#DB9B4D","horizontalAlign":"center","pressedBackgroundColorRatios":[0],"iconHeight":0,"layout":"horizontal","class":"Button","backgroundColorRatios":[0],"fontSize":14,"paddingTop":0,"width":122.7,"rollOverShadow":false,"minHeight":1,"paddingBottom":0,"minWidth":1,"height":14.7,"label":trans('Button_F6843ACF_C231_CC9E_41E6_07DB31EA8EA6.label'),"fontColor":"#FFFFFF"},{"id":"MainViewerModel3DPlayer","viewerArea":"this.MainViewer","class":"Model3DPlayer"},{"surfaceReticleMinRadius":15,"floorRadius":0.46,"environmentIntensity":0.5,"model":"this.res_E480D279_C233_DF82_41D1_B2E1562B5E75","lights":["this.light_E4C813E6_C233_DC8E_41E0_DDC7A4DE425B","this.light_E4C9D3E6_C233_DC8E_41C5_5FF8F725F0EB"],"class":"Model3D","id":"model_E4961278_C233_DF82_41E6_959CAB09446E","surfaceReticleMaxRadius":50,"surfaceSelectionCoef":2,"camera":"this.cam_E4D813E5_C233_DC82_41D7_71603E7E99DB","backgroundColor":"#333333","sphericalHarmonicsMaxDegree":3,"thumbnailUrl":"media/model_E4961278_C233_DF82_41E6_959CAB09446E_t.jpg","antialiasingLevel":0.3,"castShadow":true,"data":{"keepModel3DLoadedWithoutLocation":true,"showOnlyHotspotsLineSight":true,"showOnlyHotspotsLineSightInPanoramas":true,"label":"untitled"},"label":trans('model_E4961278_C233_DF82_41E6_959CAB09446E.label'),"surfaceReticleRadius":0.02,"objects":[]},{"id":"mainPlayList","items":[{"player":"this.MainViewerModel3DPlayer","class":"Model3DPlayListItem","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","media":"this.model_E4961278_C233_DF82_41E6_959CAB09446E"}],"class":"PlayList"},{"playbackBarHeadShadowColor":"#000000","playbackBarBorderSize":0,"surfaceReticleColor":"#FFFFFF","toolTipPaddingTop":4,"subtitlesFontFamily":"Arial","progressOpacity":0.7,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBarBorderColor":"#000000","playbackBarHeadBorderSize":0,"progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadow":true,"surfaceReticleSelectionColor":"#FFFFFF","data":{"name":"Main Viewer"},"toolTipShadowColor":"#333138","playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesGap":0,"playbackBarBottom":5,"subtitlesBackgroundColor":"#000000","toolTipTextShadowColor":"#000000","progressBarBackgroundColor":["#3399FF"],"toolTipFontFamily":"Arial","progressBorderColor":"#000000","firstTransitionDuration":0,"vrPointerColor":"#FFFFFF","playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"progressBackgroundColor":["#000000"],"toolTipBackgroundColor":"#F6F6F6","subtitlesTextShadowOpacity":1,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","progressBottom":10,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundOpacity":1,"toolTipPaddingRight":6,"progressBorderSize":0,"subtitlesTop":0,"progressHeight":2,"playbackBarHeadShadowOpacity":0.7,"progressBarBorderRadius":2,"id":"MainViewer","subtitlesFontColor":"#FFFFFF","progressBarBorderSize":0,"progressBackgroundColorRatios":[0],"vrPointerSelectionTime":2000,"playbackBarProgressBackgroundColorRatios":[0],"vrThumbstickRotationStep":20,"progressBorderRadius":2,"progressLeft":"33%","subtitlesTextShadowColor":"#000000","playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","subtitlesBottom":50,"subtitlesFontSize":"3vmin","toolTipBorderColor":"#767676","toolTipFontColor":"#606060","class":"ViewerArea","playbackBarProgressBorderColor":"#000000","playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundOpacity":0.2,"minHeight":50,"subtitlesBorderColor":"#FFFFFF","minWidth":100,"toolTipPaddingBottom":4,"width":"100%","playbackBarLeft":0,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","height":"100%","toolTipFontSize":"1.11vmin","subtitlesTextShadowVerticalLength":1,"toolTipPaddingLeft":6,"propagateClick":false,"playbackBarHeadHeight":15,"progressRight":"33%"},{"verticalAlign":"middle","borderColor":"#000000","rollOverBackgroundColorRatios":[0],"rollOverBackgroundColor":["#DB9B4D"],"top":"14.92%","pressedFontColor":"#000000","id":"Button_F29AEDC6_C230_C48E_41E5_9F07D0D93E66","rollOverBackgroundOpacity":0,"left":"1%","paddingLeft":0,"click":"this.startMeasurement(null, this.measure_F5A3E080_C250_7C82_41D3_5017DA46A918)","pressedBackgroundOpacity":0,"backgroundColor":["#000000"],"fontFamily":"Cinzel Bold","iconWidth":0,"data":{"name":"Button house info"},"paddingRight":0,"pressedBackgroundColor":["#DB9B4D"],"fontWeight":"bold","backgroundOpacity":0,"tabIndex":0,"rollOverFontColor":"#DB9B4D","horizontalAlign":"center","pressedBackgroundColorRatios":[0],"iconHeight":0,"layout":"horizontal","class":"Button","backgroundColorRatios":[0],"fontSize":14,"paddingTop":0,"width":57,"rollOverShadow":false,"minHeight":1,"paddingBottom":0,"minWidth":1,"height":29.5,"label":trans('Button_F29AEDC6_C230_C48E_41E5_9F07D0D93E66.label'),"fontColor":"#FFFFFF"},{"verticalAlign":"middle","borderColor":"#000000","rollOverBackgroundColorRatios":[0],"rollOverBackgroundColor":["#DB9B4D"],"top":"27.22%","pressedFontColor":"#000000","id":"Button_F6CAEDD7_C230_448E_41D4_F880B3D15FD4","rollOverBackgroundOpacity":0,"left":"0.38%","paddingLeft":0,"click":"this.stopMeasurement(null)","pressedBackgroundOpacity":0,"backgroundColor":["#000000"],"fontFamily":"Cinzel Bold","iconWidth":0,"data":{"name":"Button house info"},"paddingRight":0,"pressedBackgroundColor":["#DB9B4D"],"fontWeight":"bold","backgroundOpacity":0,"tabIndex":0,"rollOverFontColor":"#DB9B4D","horizontalAlign":"center","pressedBackgroundColorRatios":[0],"iconHeight":0,"layout":"horizontal","class":"Button","backgroundColorRatios":[0],"fontSize":14,"paddingTop":0,"width":104.1,"rollOverShadow":false,"minHeight":1,"paddingBottom":0,"minWidth":1,"height":21.5,"label":trans('Button_F6CAEDD7_C230_448E_41D4_F880B3D15FD4.label'),"fontColor":"#FFFFFF"},{"pointMinRadius":5,"lineColor":"#00FF00","class":"MeasureModel3DObject","useHandCursor":false,"id":"measure_F5A3E080_C250_7C82_41D3_5017DA46A918","labelFontFamily":"Arial","data":{"label":"Object"},"pointColor":"#FFFFFF","pointMaxRadius":5,"labelFontSize":"12px","areaOpacity":0.5,"type":"multiple","areaColor":"#FFFFFF","labelFontColor":"#FFFFFF"},{"class":"Model3DResource","id":"res_E480D279_C233_DF82_41D1_B2E1562B5E75","levels":[{"class":"Model3DResourceLevel","url":"media/model_E4961278_C233_DF82_41E6_959CAB09446E/scene.glb"},{"tags":"mobile","class":"Model3DResourceLevel","url":"media/model_E4961278_C233_DF82_41E6_959CAB09446E/scene_mobile.glb"}]},{"pitch":-8,"yaw":-45,"castShadow":true,"intensity":0.84,"class":"OrbitLight","id":"light_E4C813E6_C233_DC8E_41E0_DDC7A4DE425B","mode":"fixed_to_camera","shadowTolerance":2},{"pitch":75,"yaw":135,"castShadow":true,"intensity":0.3,"class":"OrbitLight","id":"light_E4C9D3E6_C233_DC8E_41C5_5FF8F725F0EB","shadowTolerance":2},{"minZ":-0.56,"minDistance":0.09,"minX":-0.65,"class":"OrbitModel3DCamera","maxY":0.2,"id":"cam_E4D813E5_C233_DC82_41D7_71603E7E99DB","maxZ":0.81,"maxX":0.66,"autoNearFar":true,"minY":-0.21,"initialZ":0.12,"vrEnabled":true,"doubleClickAction":"none","maxDistance":0.76,"initialDistance":0.38,"initialPitch":-30,"initialY":0}],"downloadEnabled":true,"layout":"absolute","scrollBarMargin":2,"defaultMenu":["fullscreen","mute","rotation"],"class":"Player","backgroundColorRatios":[0],"width":"100%","minWidth":0,"minHeight":0,"gap":10,"height":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.7, Mon May 12 2025