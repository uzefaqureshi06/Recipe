const express = require('express');
const cors = require('cors');
const supabase = require('./db/connection')
const app = express();


app.use(cors());
app.use(express.json());


app.post('/', async (req, res) => {
  const { title,image } = req.body; // added missing comma
  try {
    const { data, error } = await supabase
      .from('card')
      .insert([{ title,image }]);
      
    if (error) {
      throw error;
    }
    
    res.status(200).json({ message: 'Card added successfully', card: data });
  } catch (error) {
    res.status(500).json({ message: 'Error adding card', error: error.message });
  }
});

app.get('/', async (req, res) => {

  try {
    const { data, error } = await supabase
      .from('card')
      .select('*')
    if (error) {
      throw error
    }
    res.status(200).json({ message: 'Card get successfully', card: data })
  } catch (error) {
    res.status(500).json({ message: 'Error adding card', error: error.message });
  }
});


app.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('card')
      .select('*')
      .eq('id', id);
    if (error) {
      throw error;
    }
    res.status(200).json({ message: 'Card retrieved successfully', card: data[0] });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving card', error: error.message });
  }
});




const PORT = 8000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
