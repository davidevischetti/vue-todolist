const toDo = new Vue ({
    el : '#container',
    data : {
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
    }
});