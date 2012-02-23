// : app.js
//@off
define([
  'models/app_model',
  'views/app_view'
], function(model, view) {
  //@on
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
                        "PapContent" : '<div class="ep-blog" style="display: block; clear: both; font-size: 12px; font-family: Arial, Helvetica, sans-serif; color: #333; text-align: left;"> Blue Cruise Alaska</div>                                      <div class="ep-blog-content" style="clear: both; font-size: 14px; font-family: Georgia, "Times New Roman", Times, serif; color: #444; line-height: 1.5;"><p>Alaska is a land of xtremes and on our cruise you will see firsthand the spectacular flourish of nature and wildlife that is of unique to Alaska. Our ship will take you right up to the dazzling array of wild animals living on the untouched coastline of western Alaska. You will see bald eagles, dolphins, puffins and even bears and moose.</p><div class="ep-blog-photo" style="margin: 10px 0; text-align: center;"> <img src="imgs/temp-1.jpg" alt="Blue Cruise Alaska" />  </div> <p>Our cruise vessels are cosy and comfortable with excellent care taken to ensure your safety throughout the entire trip. Your captain will be attentive to your needs and will ensure that you have a smooth and exciting trip.</p><p> Our cruise will provide you with a trip like no other at an unmatched price. Our package includes all expenses, so there is no need to worry about extra charges along the way.</p> </div></div>'
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
            //precache epaper imgs
            var _eContent = jsonData.Activity.ComSrc.PapContent;
            _eContent.replace(/img\s+src="([^"]+)/mg, function($$, $1) {
              _.preCache($1);
            });
            
            //get activity data
            this.model = new model({
                'template_id' : jsonData.Activity.Template_id,
                'comsrc' : {
                    'content' : jsonData.Activity.ComSrc.Title,
                    'epaper' : {
                        'epaper_content' : _eContent,
                        'act_box_fullwidth' : false,
                        'width' : 600,
                        'expandable' : true,
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
        tpl : {
            tpl_engine : 'jtemplate',
            config : {
                filter_data : false
            }
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
