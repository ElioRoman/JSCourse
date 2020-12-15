'use strict'
const createLogger = () =>{

    let memory = [];

    function warn (text){
        memory.push({ 
            message: text, 
            dateTime: new Date(), 
            type: 'warn',})
        }

    function error (text){
        memory.push({ 
            message: text, 
            dateTime: new Date(), 
            type: 'error',})
        }
    
    function log (text){
        memory.push({ message: text, 
            dateTime: new Date(), 
            type: 'log',})
        }

    function getRecord (text){
        
         if (text === undefined) {
             return memory.sort((a, b) => b.dateTime - a.dateTime);
        } 
          return memory.filter(el => el.type === text).sort((a, b) => b.dateTime - a.dateTime);
        }
    
    return {warn, log, error, getRecord};
}

const logger = createLogger();
logger.log('User logged in');
logger.warn('User try to restricted page');
logger.log('User logged out');
logger.error('Unexpected error on the site');
console.log (logger.getRecord());

