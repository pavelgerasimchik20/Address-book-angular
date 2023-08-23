import { Request, Response, Router } from 'express';

const router = Router();


// get all addresses
router.get('/', async (req: Request, res: Response) => {
  try {
    const address1 = [
      {
        hey: 'Iam from version 2',
        id: '1',
        address: 'haifa Irbid 3',
        occupant: 'John Doe',
      },
    ];

    console.debug(`Returning the books ${JSON.stringify(address1)}`);

    res.status(200).json(address1);

  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});


router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    res.status(200).json({
      "id" : "123"
    });
  } catch (error) {
    console.error('An error ocurred:', error);
    res.status(500).json(error);
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    res.status(201).json({});
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    res.status(200).json({});
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json(error);
  }
});

export default router;