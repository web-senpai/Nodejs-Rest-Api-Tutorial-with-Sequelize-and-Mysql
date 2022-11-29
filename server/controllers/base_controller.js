import Validator from "validatorjs";
class BaseController {

    createResponse(statusCode , result , res)
    {
        if(statusCode == 401)
        {
            //logger.info(typeof result == 'string' ? result : JSON.stringify(result) );
            res.status(statusCode).json(result);
        }
        if(statusCode == 201 || statusCode == 200)
        {
            res.status(statusCode).json(result);
        }
        if(statusCode == 500)
        {
            //logger.error(typeof result == 'string' ? result : JSON.stringify(result)); //Log removed to stop double printing of errors
            res.status(statusCode).json(result);
        }
        if(statusCode == 412)
        {
            //logger.info(typeof result == 'string' ? result : JSON.stringify(result));
            res.status(statusCode).json(result);
        }
    }

    validateRequest(rules, request, response)
    {
        
        if(request.uid == null)
        {
            this.createResponse(401,request.error,response);
            return false;
        }

        let validation = new Validator(request.body, rules);
        
        if(validation.fails())
        {
            this.createResponse(412,validation.errors.all(),response);
            return false;
        }

        return true;
    }

    parseResponse(status , request, response)
    {
        if(status.error == null && request.method == "POST")
        {
            this.createResponse(201,status.result,response);
        }
        else if(status.error == null)
        {
            this.createResponse(200,status.result,response);
        }
        else
        {
            this.createResponse(500,status.error,response);
        }
    }
};

export {BaseController};