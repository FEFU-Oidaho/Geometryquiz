let question_list = [
    {
        "image_path": require("./images/task_1/task.png").default,
        "questions": [
            {   
                "question_id": 1,
                "text": "Формула нахождения площади:",
                "answers": [
                    "./images/task_1/ans_1.png", 
                ]
            },
            {
                "question_id": 2,
                "text": "Формула нахождения угла А:",
                "answers": [
                    require("./images/task_1/2.png").default,
                    require("./images/task_1/3.png").default,
                ]
            },
            {
                "question_id": 3,
                "text": "Формула нахождения периметра:",
                "answers": [
                    require("./images/task_1/4.png").default,
                    require("./images/task_1/5.png").default,
                    require("./images/task_1/6.png").default
                ]
            },
        ]
    },
]

export default question_list;