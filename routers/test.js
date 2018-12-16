const express = require("express");
const Router = express.Router();
const FileController = require("../controller/fileController");
const async = require("async")
const requireLogin = require('../middlewares/requireLogin');

Router.get("/test", requireLogin, (req, res) => {

    FileController.find10DienTu((err, docs) => {
        let Data = docs
        let listElem = Data.map((item, index) => `
           <div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label"><h5>Câu hỏi ${index + 1} :</h5></label>
                    
                    <div class="col-sm-10">
                        <h5>${item.dtQuestionContent}</h5> 
                       
                    </div>
                </div>
                <fieldset class="form-group">
                    <div class="row">
                        <legend class="col-form-label col-sm-2 pt-0"><h5>Câu trả lời</h5></legend>
                        <div class="col-sm-10">
                            <div class="form-check  ">
                                <input class="form-check-input " type="radio" name="AnswerValue${index + 1}" value="A">
                             
                                <div class="col-sm-10">
                                    <h5>A. ${item.dtAnswer.AnswerAContent}</h5>
                                </div>

                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="AnswerValue${index + 1}" value="B">
                                <div class="col-sm-10">
                                    <h5>B. ${item.dtAnswer.AnswerBContent}</h5>
                                </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="AnswerValue${index + 1}" value="C">
                                <div class="col-sm-10">
                                    <h5>C. ${item.dtAnswer.AnswerCContent}</h5>
                                </div>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="AnswerValue${index + 1}" value="D">
                                <div class="col-sm-10">
                                    <h5>D. ${item.dtAnswer.AnswerDContent}</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                </fieldset>
                <input style="display:none" name="Question${index + 1}" value="${item._id}"></input>
                </div> 
            `)
        FileController.find10TracNghiem((err, data) => {
            let tracnghiem = data
            let listElem2 = tracnghiem.map((item, index) => `
                <div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label"><h5>Câu hỏi ${index + 11} :</h5></label>
                        
                        <div class="col-sm-10">
                            <h5>${item.tnQuestionContent}</h5> 
                        
                        </div>
                    </div>
                    <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0"><h5>Câu trả lời</h5></legend>
                            <div class="col-sm-10">
                                <div class="form-check  ">
                                    <input class="form-check-input " type="radio" name="AnswerValue${index + 11}" value="A">
                                
                                    <div class="col-sm-10">
                                        <h5>A. ${item.tnAnswer.AnswerAContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="AnswerValue${index + 11}" value="B">
                                    <div class="col-sm-10">
                                        <h5>B. ${item.tnAnswer.AnswerBContent}</h5>
                                    </div>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="AnswerValue${index + 11}" value="C">
                                    <div class="col-sm-10">
                                        <h5>C. ${item.tnAnswer.AnswerCContent}</h5>
                                    </div>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="AnswerValue${index + 11}" value="D">
                                    <div class="col-sm-10">
                                        <h5>D. ${item.tnAnswer.AnswerDContent}</h5>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </fieldset>
                    <input style="display:none" name="Question${index + 11}" value="${item._id}"></input>
                    </div> 
            `)
            FileController.find2BaiDoc((err, info) => {
                let baidoc = info
                let listElem3 = (`
                    <div>
                        <div class="form-group">
                            <h4>${baidoc[0].bdParagraph}</h4>
                        </div>
                    </div> 
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label"><h5>Câu hỏi 41: </h5></label>
                        <div class="col-sm-10">
                            <h5>${baidoc[0].bdQuestion.Question1.Q1QuestionContent}</h5>
                        </div>
                    </div>
                    <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0"><h5>Câu trả lời</h5></legend>
                            <div class="col-sm-10">
                                <div class="form-check  ">
                                    <input class="form-check-input " type="radio" name="Q41AnswerValue" value="A">
                                   
                                    <div class="col-sm-10">
                                        <h5>A. ${baidoc[0].bdQuestion.Question1.Q1AnswerAContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q41AnswerValue" value="B">
                                    <div class="col-sm-10">
                                        <h5>B. ${baidoc[0].bdQuestion.Question1.Q1AnswerBContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q41AnswerValue" value="C">
                                    <div class="col-sm-10">
                                        <h5>C. ${baidoc[0].bdQuestion.Question1.Q1AnswerCContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q41AnswerValue" value="D">
                                    <div class="col-sm-10">
                                    <h5>D. ${baidoc[0].bdQuestion.Question1.Q1AnswerDContent}</h5>
                                </div>

                                </div>

                            </div>
                        </div>
                    </fieldset>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label"><h5>Câu hỏi 42: </h5></label>
                        <div class="col-sm-10">
                            <h5>${baidoc[0].bdQuestion.Question2.Q2QuestionContent}</h5>
                        </div>
                    </div>
                    <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0"><h5>Câu trả lời</h5></legend>
                            <div class="col-sm-10">
                                <div class="form-check  ">
                                    <input class="form-check-input " type="radio" name="Q42AnswerValue" value="A">
                                
                                    <div class="col-sm-10">
                                        <h5>A. ${baidoc[0].bdQuestion.Question2.Q2AnswerAContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q42AnswerValue" value="B">
                                    <div class="col-sm-10">
                                        <h5>B. ${baidoc[0].bdQuestion.Question2.Q2AnswerBContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q42AnswerValue" value="C">
                                    <div class="col-sm-10">
                                        <h5>C. ${baidoc[0].bdQuestion.Question2.Q2AnswerCContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q42AnswerValue" value="D">
                                    <div class="col-sm-10">
                                    <h5>D. ${baidoc[0].bdQuestion.Question2.Q2AnswerDContent}</h5>
                                </div>

                                </div>

                            </div>
                        </div>
                    </fieldset>
                    <input style="display:none" name="baidoc1id" value="${baidoc[0]._id}"></input>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label"><h5>Câu hỏi 43: </h5></label>
                        <div class="col-sm-10">
                            <h5>${baidoc[0].bdQuestion.Question3.Q3QuestionContent}</h5>
                        </div>
                    </div>
                    <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0"><h5>Câu trả lời</h5></legend>
                            <div class="col-sm-10">
                                <div class="form-check  ">
                                    <input class="form-check-input " type="radio" name="Q43AnswerValue" value="A">
                                
                                    <div class="col-sm-10">
                                        <h5>A. ${baidoc[0].bdQuestion.Question3.Q3AnswerAContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q43AnswerValue" value="B">
                                    <div class="col-sm-10">
                                        <h5>B. ${baidoc[0].bdQuestion.Question3.Q3AnswerBContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q43AnswerValue" value="C">
                                    <div class="col-sm-10">
                                        <h5>C. ${baidoc[0].bdQuestion.Question3.Q3AnswerCContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q43AnswerValue" value="D">
                                    <div class="col-sm-10">
                                    <h5>D. ${baidoc[0].bdQuestion.Question3.Q3AnswerDContent}</h5>
                                </div>

                                </div>

                            </div>
                        </div>
                    </fieldset>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label"><h5>Câu hỏi 44: </h5></label>
                        <div class="col-sm-10">
                            <h5>${baidoc[0].bdQuestion.Question4.Q4QuestionContent}</h5>
                        </div>
                    </div>
                    <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0"><h5>Câu trả lời</h5></legend>
                            <div class="col-sm-10">
                                <div class="form-check  ">
                                    <input class="form-check-input " type="radio" name="Q44AnswerValue" value="A">
                                
                                    <div class="col-sm-10">
                                        <h5>A. ${baidoc[0].bdQuestion.Question4.Q4AnswerAContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q44AnswerValue" value="B">
                                    <div class="col-sm-10">
                                        <h5>B. ${baidoc[0].bdQuestion.Question4.Q4AnswerBContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q44AnswerValue" value="C">
                                    <div class="col-sm-10">
                                        <h5>C. ${baidoc[0].bdQuestion.Question4.Q4AnswerCContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q44AnswerValue" value="D">
                                    <div class="col-sm-10">
                                    <h5>D. ${baidoc[0].bdQuestion.Question4.Q4AnswerDContent}</h5>
                                </div>

                                </div>

                            </div>
                        </div>
                    </fieldset>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label"><h5>Câu hỏi 45: </h5></label>
                        <div class="col-sm-10">
                            <h5>${baidoc[0].bdQuestion.Question5.Q5QuestionContent}</h5>
                        </div>
                    </div>
                    <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0"><h5>Câu trả lời</h5></legend>
                            <div class="col-sm-10">
                                <div class="form-check  ">
                                    <input class="form-check-input " type="radio" name="Q45AnswerValue" value="A">
                                
                                    <div class="col-sm-10">
                                        <h5>A. ${baidoc[0].bdQuestion.Question5.Q5AnswerAContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q45AnswerValue" value="B">
                                    <div class="col-sm-10">
                                        <h5>B. ${baidoc[0].bdQuestion.Question5.Q5AnswerBContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q45AnswerValue" value="C">
                                    <div class="col-sm-10">
                                        <h5>C. ${baidoc[0].bdQuestion.Question5.Q5AnswerCContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q45AnswerValue" value="D">
                                    <div class="col-sm-10">
                                    <h5>D. ${baidoc[0].bdQuestion.Question5.Q5AnswerDContent}</h5>
                                </div>

                                </div>

                            </div>
                        </div>
                    </fieldset>
                `)
                let listElem4 = (`
                    <div>
                        <div class="form-group">
                            <h4>${baidoc[1].bdParagraph}</h4>
                        </div>
                    </div> 
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label"><h5>Câu hỏi 46: </h5></label>
                        <div class="col-sm-10">
                            <h5>${baidoc[1].bdQuestion.Question1.Q1QuestionContent}</h5>
                        </div>
                    </div>
                    <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0"><h5>Câu trả lời</h5></legend>
                            <div class="col-sm-10">
                                <div class="form-check  ">
                                    <input class="form-check-input " type="radio" name="Q46AnswerValue" value="A">
                                
                                    <div class="col-sm-10">
                                        <h5>A. ${baidoc[1].bdQuestion.Question1.Q1AnswerAContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q46AnswerValue" value="B">
                                    <div class="col-sm-10">
                                        <h5>B. ${baidoc[1].bdQuestion.Question1.Q1AnswerBContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q46AnswerValue" value="C">
                                    <div class="col-sm-10">
                                        <h5>C. ${baidoc[1].bdQuestion.Question1.Q1AnswerCContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q46AnswerValue" value="D">
                                    <div class="col-sm-10">
                                    <h5>D. ${baidoc[1].bdQuestion.Question1.Q1AnswerDContent}</h5>
                                </div>

                                </div>

                            </div>
                        </div>
                    </fieldset>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label"><h5>Câu hỏi 47: </h5></label>
                        <div class="col-sm-10">
                            <h5>${baidoc[1].bdQuestion.Question2.Q2QuestionContent}</h5>
                        </div>
                    </div>
                    <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0"><h5>Câu trả lời</h5></legend>
                            <div class="col-sm-10">
                                <div class="form-check  ">
                                    <input class="form-check-input " type="radio" name="Q47AnswerValue" value="A">
                                
                                    <div class="col-sm-10">
                                        <h5>A. ${baidoc[1].bdQuestion.Question2.Q2AnswerAContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q47AnswerValue" value="B">
                                    <div class="col-sm-10">
                                        <h5>B. ${baidoc[1].bdQuestion.Question2.Q2AnswerBContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q47AnswerValue" value="C">
                                    <div class="col-sm-10">
                                        <h5>C. ${baidoc[1].bdQuestion.Question2.Q2AnswerCContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q47AnswerValue" value="D">
                                    <div class="col-sm-10">
                                    <h5>D. ${baidoc[1].bdQuestion.Question2.Q2AnswerDContent}</h5>
                                </div>

                                </div>

                            </div>
                        </div>
                    </fieldset>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label"><h5>Câu hỏi 48: </h5></label>
                        <div class="col-sm-10">
                            <h5>${baidoc[1].bdQuestion.Question3.Q3QuestionContent}</h5>
                        </div>
                    </div>
                    <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0"><h5>Câu trả lời</h5></legend>
                            <div class="col-sm-10">
                                <div class="form-check  ">
                                    <input class="form-check-input " type="radio" name="Q48AnswerValue" value="A">
                                
                                    <div class="col-sm-10">
                                        <h5>A. ${baidoc[1].bdQuestion.Question3.Q3AnswerAContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q48AnswerValue" value="B">
                                    <div class="col-sm-10">
                                        <h5>B. ${baidoc[1].bdQuestion.Question3.Q3AnswerBContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q48AnswerValue" value="C">
                                    <div class="col-sm-10">
                                        <h5>C. ${baidoc[1].bdQuestion.Question3.Q3AnswerCContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q48AnswerValue" value="D">
                                    <div class="col-sm-10">
                                    <h5>D. ${baidoc[1].bdQuestion.Question3.Q3AnswerDContent}</h5>
                                </div>

                                </div>

                            </div>
                        </div>
                    </fieldset>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label"><h5>Câu hỏi 49: </h5></label>
                        <div class="col-sm-10">
                            <h5>${baidoc[1].bdQuestion.Question4.Q4QuestionContent}</h5>
                        </div>
                    </div>
                    <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0"><h5>Câu trả lời</h5></legend>
                            <div class="col-sm-10">
                                <div class="form-check  ">
                                    <input class="form-check-input " type="radio" name="Q49AnswerValue" value="A">
                                
                                    <div class="col-sm-10">
                                        <h5>A. ${baidoc[1].bdQuestion.Question4.Q4AnswerAContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q49AnswerValue" value="B">
                                    <div class="col-sm-10">
                                        <h5>B. ${baidoc[1].bdQuestion.Question4.Q4AnswerBContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q49AnswerValue" value="C">
                                    <div class="col-sm-10">
                                        <h5>C. ${baidoc[1].bdQuestion.Question4.Q4AnswerCContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q49AnswerValue" value="D">
                                    <div class="col-sm-10">
                                    <h5>D. ${baidoc[1].bdQuestion.Question4.Q4AnswerDContent}</h5>
                                </div>

                                </div>

                            </div>
                        </div>
                    </fieldset>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label"><h5>Câu hỏi 50: </h5></label>
                        <div class="col-sm-10">
                            <h5>${baidoc[1].bdQuestion.Question5.Q5QuestionContent}</h5>
                        </div>
                    </div>
                    <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0"><h5>Câu trả lời</h5></legend>
                            <div class="col-sm-10">
                                <div class="form-check  ">
                                    <input class="form-check-input " type="radio" name="Q50AnswerValue" value="A">
                                
                                    <div class="col-sm-10">
                                        <h5>A. ${baidoc[1].bdQuestion.Question5.Q5AnswerAContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q50AnswerValue" value="B">
                                    <div class="col-sm-10">
                                        <h5>B. ${baidoc[1].bdQuestion.Question5.Q5AnswerBContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q50AnswerValue" value="C">
                                    <div class="col-sm-10">
                                        <h5>C. ${baidoc[1].bdQuestion.Question5.Q5AnswerCContent}</h5>
                                    </div>

                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="Q50AnswerValue" value="D">
                                    <div class="col-sm-10">
                                    <h5>D. ${baidoc[1].bdQuestion.Question5.Q5AnswerDContent}</h5>
                                </div>

                                </div>

                            </div>
                        </div>
                    </fieldset>
                    <input style="display:none" name="baidoc2id" value="${baidoc[1]._id}"></input>
                `)
                // res.send(baidoc)
                res.render("test", {
                    Arr: listElem,
                    Arr2: listElem2,
                    Arr3: listElem3,
                    Arr4: listElem4
                })
            })

        })
        // res.send(Data[0])

    })

})

Router.post("/test", async function (req, res) {
    let answerData = req.body
    let dtAnsArr = []

    let q1 = {
        _id: req.body.Question1,
        answer: req.body.AnswerValue1
    }
    let q2 = {
        _id: req.body.Question2,
        answer: req.body.AnswerValue2
    }
    let q3 = {
        _id: req.body.Question3,
        answer: req.body.AnswerValue3
    }
    let q4 = {
        _id: req.body.Question4,
        answer: req.body.AnswerValue4
    }
    let q5 = {
        _id: req.body.Question5,
        answer: req.body.AnswerValue5
    }
    let q6 = {
        _id: req.body.Question6,
        answer: req.body.AnswerValue6
    }
    let q7 = {
        _id: req.body.Question7,
        answer: req.body.AnswerValue7
    }
    let q8 = {
        _id: req.body.Question8,
        answer: req.body.AnswerValue8
    }
    let q9 = {
        _id: req.body.Question9,
        answer: req.body.AnswerValue9
    }
    let q10 = {
        _id: req.body.Question10,
        answer: req.body.AnswerValue10
    }

    let tnAnsArr = []
    let q11 = {
        _id: req.body.Question11,
        answer: req.body.AnswerValue11
    }
    let q12 = {
        _id: req.body.Question12,
        answer: req.body.AnswerValue12
    }
    let q13 = {
        _id: req.body.Question13,
        answer: req.body.AnswerValue13
    }
    let q14 = {
        _id: req.body.Question14,
        answer: req.body.AnswerValue14
    }
    let q15 = {
        _id: req.body.Question15,
        answer: req.body.AnswerValue15
    }
    let q16 = {
        _id: req.body.Question16,
        answer: req.body.AnswerValue16
    }
    let q17 = {
        _id: req.body.Question17,
        answer: req.body.AnswerValue17
    }
    let q18 = {
        _id: req.body.Question18,
        answer: req.body.AnswerValue18
    }
    let q19 = {
        _id: req.body.Question19,
        answer: req.body.AnswerValue19
    }
    let q20 = {
        _id: req.body.Question20,
        answer: req.body.AnswerValue20
    }

    let bd1id = req.body.baidoc1id
    let Q41Value = req.body.Q41AnswerValue
    let Q42Value = req.body.Q42AnswerValue
    let Q43Value = req.body.Q43AnswerValue
    let Q44Value = req.body.Q44AnswerValue
    let Q45Value = req.body.Q45AnswerValue

    let bd1obj = {
        Q41Value, Q42Value, Q43Value, Q44Value, Q45Value
    }

    let bd2id = req.body.baidoc2id
    let Q46Value = req.body.Q46AnswerValue
    let Q47Value = req.body.Q47AnswerValue
    let Q48Value = req.body.Q48AnswerValue
    let Q49Value = req.body.Q49AnswerValue
    let Q50Value = req.body.Q50AnswerValue




    await dtAnsArr.push(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10)
    console.log(dtAnsArr)
    tnAnsArr.push(q11, q12, q13, q14, q15, q16, q17, q18, q19, q20)
    FileController.checkDienTu(dtAnsArr, (err, dt) => {
        let dtScore = dt
        console.log("Diem dien tu", dtScore)
        FileController.checkTracNghiem(tnAnsArr, (err, tn) => {
            let tnScore = tn
            console.log("Diem trac nghiem", tnScore)
            FileController.checkBaiDoc(bd1id, Q41Value, Q42Value, Q43Value, Q44Value, Q45Value, (err, bd1) => {
                let bd1Score = bd1

                console.log("Diem bai doc 1", bd1Score)
                FileController.checkBaiDoc(bd2id, Q46Value, Q47Value, Q48Value, Q49Value, Q50Value, (err, bd2) => {
                    let bd2Score = bd2
                    let writeScore = dtScore + tnScore + bd1Score + bd2Score
                    console.log("Diem bai doc 2", bd2Score)
                    FileController.createUserScore(req.user._id, writeScore)
                    res.send(req.user._id)
                    res.redirect("http://localhost:5000/userscore")

                })
            })
        })

    })




})

module.exports = Router