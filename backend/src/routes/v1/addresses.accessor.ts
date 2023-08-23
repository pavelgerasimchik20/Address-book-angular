import { Request, Response, Router } from 'express';
import { Address } from '../../models/address.model';

const AWS = require('aws-sdk');

const router = Router();
AWS.config.update({
  region: "eu-north-1", 
  endpoint: "http://localhost:8000" 
});

// accessor directly works with data base

const dynamoDB = new AWS.DynamoDB.DocumentClient({
  endpoint: "http://localhost:8000",
});


// GET all addresses
router.get('/', async (req: Request, res: Response) => {
  try {
    const params = {
      TableName: "FirstTable"
    };
    
    const result = await dynamoDB.scan(params).promise();

    res.status(200).json(result.Items);
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

// GET address BY ID 
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const params = {
      TableName: "FirstTable",
      Key: {
        "Id": req.params.id
      }
    };
    
    const result = await dynamoDB.get(params).promise();

    res.status(200).json(result.Item);
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

// ADD new address
router.post('/', async (req: Request, res: Response) => {
  try {
    const addressData = req.body;

    const params = {
      TableName: "FirstTable",
      Item: addressData as Address
    };

    await dynamoDB.put(params).promise();
    
    res.status(201).json(addressData);
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});


// UPDATE BY ID
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name, city, street, building, apartment } = req.body;

    const params = {
      TableName: "FirstTable",
      Key: {
        "Id": id
      },
      UpdateExpression: "set name = :name, city = :city, street = :street, building = :building, apartment = :apartment",
      ExpressionAttributeValues: {
        ":name": name,
        ":city": city,
        ":street": street,
        ":building": building,
        ":apartment": apartment
      },
      ReturnValues: "UPDATED_NEW"
    };

    dynamoDB.update(params, (error: any, result: any) => {
      if (error) {
        console.error("Unable to update item. Error:", JSON.stringify(error, null, 2));
        res.status(500).json(error);
      } else {
        res.status(200).json(result.Attributes);
      }
    });

  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

//DELETE BY ID
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const params = {
      TableName: "FirstTable",
      Key: {
        "Id": req.params.id
      }
    };

    await dynamoDB.delete(params).promise();

    res.status(200).json({message: "Deleted successfully"});
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

export default router;