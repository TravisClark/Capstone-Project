
import { QuestionResponse } from "../models/questions";
import { apiPaths, httpClient } from "../utils";

const getQuestionList = async (): Promise<QuestionResponse[]> => {
    const response = await httpClient.get({url:apiPaths.student.questionList})
    return response.data as QuestionResponse[]
}

export const questionServices = {
    getQuestionList
}