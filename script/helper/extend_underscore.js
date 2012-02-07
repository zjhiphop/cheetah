define(function (require) {
  var extend=function(){};
  extend.method={
    fixXMLToJSON:function(obj, parentObj, parentFieldName) {
        if(!obj)
            return null;

        if(obj && obj.constructor.toString().indexOf('Array') > 0) {
            for(var i = 0; i < obj.length; ++i) {
                obj[i] = this.fixXMLToJSON(obj[i]);
            }
        }
        else
        if( typeof (obj) == 'object') {
            for(var field in obj) {
                obj[field] = this.fixXMLToJSON(obj[field], obj, field);
                if((parentFieldName && parentFieldName.substr(0, parentFieldName.length - 1) == field) || (parentFieldName == 'PreCacheList' && field == 'Assets') || (parentFieldName == 'GrpItms' && field == 'ItemName') || (parentFieldName == 'Questions' && field == 'ClassificationContentQuestion') || (parentFieldName == 'Questions' && field == 'TimelinesContentLinesQuestionsQues') || (parentFieldName == 'Sequence' && field == 'Phrase') || (parentFieldName == 'Sequence' && field == 'Para') || (parentFieldName == 'Sequence' && field == 'Word') || (parentFieldName == 'FlashCards' && field == 'Card') || (parentFieldName == 'LangComp' && field == 'Phrase') || (parentFieldName == 'Roleplay' && field == 'Question') || (parentFieldName == 'SampleSentences' && field == 'SamPhrase') || (parentFieldName == 'BuildSentences' && field == 'BulPhrase') || (parentFieldName == 'Typing' && field == 'ModelTxt')) {
                    //fix the field which should be array
                    if(obj[field] && obj[field].constructor.toString().indexOf('Array') > 0) {
                        for(var i = 0; i < obj[field].length; ++i) {
                            obj[field][i] = this.fixXMLToJSON(obj[field][i]);
                        }
                        return obj[field];
                    }
                    else {
                        obj[field] = this.fixXMLToJSON(obj[field]);
                        return [obj[field]];
                    }
                }
                if(field == '#cdata-section') {
                    obj['CDATA'] = obj[field];
                    delete obj[field];
                }
                else
                if(field.substr(0, 1) == '@' || field.substr(0, 1) == '#' || field.substr(0, 1) == '?') {
                    obj[field.substr(1)] = obj[field];
                    delete obj[field];
                }
                else
                if(field && field.length > 3 && field.substr(field.length - 3) == 'Url' && obj[field] == null) {
                    obj[field] = '';
                }
            };
        }
        return obj;
    }
  };
  extend.prototype={
    
  };
  return extend;
});