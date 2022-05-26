const toDo = new Vue ({
    el : '#container',

    data : {
        newTask : {
            description :  '',
            check : false
        },

        list : [
            {
                description : 'fare la spesa',
                check : false
            },
            {
                description : 'stendere i panni',
                check : true
            },
            {
                description : 'fare gli esercizi che ci assegna Simone',
                check : true
            },
            {
                description : 'portare la macchina dal meccanico',
                check : true
            },
            {
                description : 'pulire casa',
                check : false
            },
            {
                description : 'fare i regali di Natale',
                check : false
            }
        ]
    },

    methods : {
        deleteTask (index) {
            this.list.splice(index, 1);
        },

        addTask () {
            if (this.newTask.description !== '') {
                this.list.push(this.newTask);
            };
            this.newTask = {
                description :  '',
                check : false
            };
        }
    }
});