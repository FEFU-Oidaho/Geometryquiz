import task_1 from './images/task_1/task.png';
import ans_1_1 from './images/task_1/1.png';
import ans_1_2 from './images/task_1/2.png';
import ans_1_3 from './images/task_1/3.png';
import ans_1_4 from './images/task_1/4.png';
import ans_1_5 from './images/task_1/5.png';
import ans_1_6 from './images/task_1/6.png';

let question_list = [
    {
        "image_path": task_1,
        "questions": [
            {   
                "question_id": 1,
                "text": "Формула нахождения площади:",
                "answers": [
                    ans_1_1, 
                ]
            },
            {
                "question_id": 2,
                "text": "Формула нахождения угла А:",
                "answers": [
                    ans_1_2,
                    ans_1_3,
                ]
            },
            {
                "question_id": 3,
                "text": "Формула нахождения периметра:",
                "answers": [
                    ans_1_4,
                    ans_1_5,
                    ans_1_6
                ]
            },
        ]
    },
]

export default question_list;