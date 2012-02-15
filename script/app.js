// : app.js
//@off
define([
  'jquery',
  'underscore',
  'backbone',
  'models/app_model',
  'views/app_view'
  //@on
], function($, _, Backbone, model, view, undef) {
    var appController = {
        init : function(act_id) {
            var jsonData = {
                "Activity" : {
                    "AudNoTimes" : "0",
                    "ComSrc" : {
                        "AudNoTimes" : "0",
                        "AudUrl" : "",
                        "Desc" : {
                            "CDATA" : null
                        },
                        "FlaPapUrl" : "http://staging.englishtown.com/Juno/school/videos/first.swf",
                        "ImgUrl" : "",
                        "Pause" : "1",
                        "Title" : "请看地图，并找出不同建筑物和地方的位置。  点击正确的选项。",
                        "VideoUrl" : "",
                        "PapContent" : ""
                    },
                    "GraMode" : "3",
                    "HasComSrc" : "1",
                    "HasLangPres" : "0",
                    "HasPreCache" : "1",
                    "Help" : {
                        "DemoUrl" : "",
                        "ShowDemoBtn" : "0",
                        "ShowHelpBtn" : "1",
                        "Txt" : {
                            "CDATA" : "<b>选择题</b> <br/><br/> \r\n　\r\n页面上会显示一个问题和最多四个可能的答案。点击正确的选项回答问题。每个问题只有一个正确答案。 <br/><br/>\r\n　\r\n点击“下一个”进入下一个问题。完成最后一个问题时，点击“提交”可查看您的成绩。在成绩页面上，点击题号可查看您的答案。 <br/><br/>\r\n　\r\n点击“再试一次”可重做练习，点击“继续”可继续下一项练习。您也可点击页面右下角的“跳过”按钮跳过此练习进入下一项练习。"
                        }
                    },
                    "Id" : "2045",
                    "InsType" : "1",
                    "NoCorrToDis" : "1",
                    "NoOptToDis" : "4",
                    "Pause" : "1",
                    "PreCacheList" : ["http://staging.englishtown.com/Juno/school/videos/first.swf"],
                    "Questions" : [{
                        "AudUrl" : "http://stg-ak1.englishtown.com/Juno/school/audios/shpingmall%20blk%20ave.mp3",
                        "Options" : [{
                            "Ans" : "0",
                            "Priority" : "1",
                            "Txt" : "C"
                        }, {
                            "Ans" : "0",
                            "Priority" : "1",
                            "Txt" : "D"
                        }, {
                            "Ans" : "0",
                            "Priority" : "1",
                            "Txt" : "B"
                        }, {
                            "Ans" : "1",
                            "Priority" : "1",
                            "Txt" : "E"
                        }],
                        "Ques" : "The shopping mall is on Black Avenue."
                    }, {
                        "AudUrl" : "http://stg-ak1.englishtown.com/Juno/school/audios/prk%20op%20shpingmall.mp3",
                        "Options" : [{
                            "Ans" : "1",
                            "Priority" : "1",
                            "Txt" : "D"
                        }, {
                            "Ans" : "0",
                            "Priority" : "1",
                            "Txt" : "A"
                        }, {
                            "Ans" : "0",
                            "Priority" : "1",
                            "Txt" : "B"
                        }, {
                            "Ans" : "0",
                            "Priority" : "1",
                            "Txt" : "C"
                        }],
                        "Ques" : "The park is opposite the shopping mall."
                    }, {
                        "AudUrl" : "http://stg-ak1.englishtown.com/Juno/school/audios/bnk%20crn%20gren%20st.mp3",
                        "Options" : [{
                            "Ans" : "0",
                            "Priority" : "1",
                            "Txt" : "E"
                        }, {
                            "Ans" : "1",
                            "Priority" : "1",
                            "Txt" : "B"
                        }, {
                            "Ans" : "0",
                            "Priority" : "1",
                            "Txt" : "A"
                        }, {
                            "Ans" : "0",
                            "Priority" : "1",
                            "Txt" : "D"
                        }],
                        "Ques" : "The bank is on the corner of Green Street. "
                    }, {
                        "AudUrl" : "http://stg-ak1.englishtown.com/Juno/school/audios/prking%20nxt%20bank.mp3",
                        "Options" : [{
                            "Ans" : "0",
                            "Priority" : "1",
                            "Txt" : "B"
                        }, {
                            "Ans" : "1",
                            "Priority" : "1",
                            "Txt" : "A"
                        }, {
                            "Ans" : "0",
                            "Priority" : "1",
                            "Txt" : "C"
                        }, {
                            "Ans" : "0",
                            "Priority" : "1",
                            "Txt" : "D"
                        }],
                        "Ques" : "The parking lot is next to the bank."
                    }, {
                        "AudUrl" : "http://stg-ak1.englishtown.com/Juno/school/audios/scl%20op%20bnk%20parking.mp3",
                        "Options" : [{
                            "Ans" : "0",
                            "Priority" : "1",
                            "Txt" : "D"
                        }, {
                            "Ans" : "0",
                            "Priority" : "1",
                            "Txt" : "B"
                        }, {
                            "Ans" : "0",
                            "Priority" : "1",
                            "Txt" : "A"
                        }, {
                            "Ans" : "1",
                            "Priority" : "1",
                            "Txt" : "C"
                        }],
                        "Ques" : "The school is opposite the bank and the parking lot."
                    }],
                    "RandomQuestions" : "1",
                    "Template" : "MCTMP",
                    "Template_id" : "5",
                    "Title" : "选择题",
                    "TryMore" : "1",
                    "Type" : "1",
                    "xmlns:xsd" : "http://www.w3.org/2001/XMLSchema",
                    "xmlns:xsi" : "http://www.w3.org/2001/XMLSchema-instance"
                }
            };
            //get activity data
            this.model = new model({
                'template_id' : jsonData.Activity.Template_id,
                'comsrc' : {
                    'content' : jsonData.Activity.ComSrc.Title,
                    'epaper' : {
                        'epaper_content' : '<div id="lipsum">' + '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce adipiscing ultricies sem, vitae congue felis dictum hendrerit. Duis pretium quam risus, at sodales dui. Duis vehicula tristique erat, at dapibus enim rhoncus at. Morbi ut sem turpis, dapibus adipiscing quam. Vestibulum volutpat iaculis faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et lorem eu eros gravida ultrices.</p>' + '<p>Nunc tempor condimentum eros commodo fermentum. Donec adipiscing pharetra purus, sit amet dapibus tortor pretium sed. In accumsan commodo neque at vulputate. Sed in nulla a erat consequat hendrerit eu vel lorem. Nulla lacus enim, tempor nec vehicula nec, vestibulum laoreet tellus. Vivamus vehicula, risus nec varius adipiscing, turpis diam iaculis ante, id dignissim ligula velit quis lacus. Suspendisse arcu urna, tincidunt vitae accumsan eu, rutrum at ligula. Vestibulum et urna vel neque placerat iaculis eu vitae ipsum. Vivamus in lobortis diam. Nulla fringilla eleifend laoreet. Mauris pretium adipiscing nisi sed eleifend. Sed tristique felis vitae ante luctus condimentum. Vivamus id eros non eros laoreet viverra.</p>' + '<p>Duis mollis dui ac nisl commodo venenatis. Nunc in varius neque. Suspendisse dignissim accumsan elit. Praesent vitae nunc purus, convallis suscipit nisl. Nulla quis lacus leo. Vivamus hendrerit cursus elit, sit amet feugiat velit fermentum eget. Nam consequat neque ac lectus tincidunt ut fermentum neque varius. Nam porta lorem posuere turpis interdum sit amet facilisis tortor gravida. Duis non metus non nulla dignissim pellentesque ut quis mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>' + '<p>Sed feugiat eros sed sem placerat tincidunt. Fusce at semper massa. Etiam viverra gravida erat, ac posuere arcu pulvinar id. Aenean sed ultricies est. Morbi mollis, lorem sed mattis dictum, metus enim sollicitudin eros, id imperdiet lacus ante in libero. Donec ut tellus libero. In ac placerat sapien. Sed ut auctor eros. Donec sagittis, lacus nec viverra placerat, enim turpis imperdiet ligula, ac feugiat odio mi vitae tellus. Integer et bibendum erat. Duis nisl arcu, vestibulum tempor accumsan hendrerit, pulvinar sed velit. Fusce euismod elit vel orci adipiscing eu feugiat libero vulputate.</p>' + '<p> Cras eu luctus ligula. Nunc consectetur dolor sit amet leo dictum tincidunt. Fusce faucibus elementum molestie. Nulla sed risus quis est vehicula pretium dictum eget mi. Aenean vel elit dolor. Cras sit amet facilisis est. Proin semper imperdiet quam, eget congue massa auctor ut. Vivamus ipsum nisl, facilisis in porta quis, commodo non massa. Fusce cursus, nisi dapibus gravida ultrices, est diam adipiscing sem, in ultrices sapien neque id massa.</p></div>',
                        'act_box_fullwidth' : false,
                        'width' : 600,
                        'expandable' : false,
                        'container' : "#ets-epaper-container"
                    },
                    'audio' : {}
                },
                'activity' : {
                    'container' : '#ets-act-bd',
                    'jsonData' : jsonData
                },
                'bb' : {
                    'container' : "#ets-act-ft",
                    'config' : {
                        'skipBtn' : {
                            'show' : true
                        }
                    },
                    'events' : {
                        'prevClick' : null,
                        'nextClick' : null,
                        'submitClick' : function(id, score, content, onSucceed, onFailed) {
                            alert('submit score : id' + id + ' score:' + score);
                        },
                        'skipClick' : function(id) {
                            alert('skip activity: ' + id);
                        }
                    }
                }
            });
        },
        render : function(act_id) {
            _.globalDispose();
            this.init(act_id);
            (new view({
                model : this.model
            })).render();
        }
    };
    return appController;
});
