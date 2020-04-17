import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    title: "Recommendation System",
    category: "Article Recommender",
    data: "",
    hisdata: "",
    reserror: "",
    clickhisbtn: false,
};

const user_item_tool = (state, action) => {
    var title = "";
    switch (action.titleid) {
        case "1":
            title = "Recommendation System"; break;
        case "2":
            title = "Classification"; break;
        case "3":
            title = "Extraction"; break;
        case "4":
            title = "Text Pre-processing"; break;
        case "5":
            title = "Plagarism"; break;
        default:
            title = "Recommendation System";
    }

    return updateObject(state, {
        title: title,
        category: action.category,
        data: "",
        reserror: "",
        clickhisbtn: false,
    });
};

const user_cat_tool = (state, action) => {
    var category = ""
    switch (action.title) {
        case "Recommendation System":
            category = "Article Recommender"; break;
        case "Classification":
            category = "Sentiment Analysis"; break;
        case "Extraction":
            category = "Text Summarization"; break;
        case "Text Pre-processing":
            category = "Lemmatization"; break;
        case "Plagarism":
            category = "Plagarism"; break;
        default:
            category = "Article Recommender";

    }
    debugger
    return updateObject(state, {
        title: action.title,
        category: category,
        data: "",
        reserror: "",
        clickhisbtn: false,
    });
};

const res = (state, action) => {
    return updateObject(state, {
        data: action.data,
        reserror: action.reserror,
        clickhisbtn: false,
    });
};

const hisres = (state, action) => {
    debugger
    return updateObject(state, {
        data: "",
        hisdata: action.hisdata,
        reserror: action.reserror,
        clickhisbtn: true,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_CAT:
            debugger
            return user_cat_tool(state, action);
        case actionTypes.USER_ITEM:
            return user_item_tool(state, action);
        case actionTypes.RESPONSE_SUCCESS:
        case actionTypes.RESPONSE_FAILED:
            return res(state, action);
        case actionTypes.HISRESPONSE_SUCCESS:
            debugger
            return hisres(state, action);
        default:
            return state;
    }
};

export default reducer;