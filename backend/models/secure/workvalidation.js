const Yup = require("yup");

exports.schema = Yup.object().shape({
    work: Yup.string().required("کار الزامی است").min(4, "نام و نام خانوادگی نباید کمتر از 4 کاراکتر باشد").max(500, "نام و نام خانوادگی نباید بیشتر از 500 کاراکتر باشد"),
    
});