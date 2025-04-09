const axios = require('axios');

const BASE_URL = 'https://mhw-db.com/monsters';

exports.getAllMonsters = async (req, res) => {
  try {
    const { element, species } = req.query;
    const response = await axios.get(BASE_URL);
    let monsters = response.data;

    if (element) {
      monsters = monsters.filter(mon => 
        mon.elements && mon.elements.includes(element)
      );
    }

    if (species) {
      monsters = monsters.filter(mon =>
        mon.species && mon.species.toLowerCase().includes(species.toLowerCase())
      );
    }

    res.json(monsters);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch monsters' });
  }
};

exports.getMonsterByName = async (req, res) => {
  try {
    const { name } = req.params;
    const response = await axios.get(BASE_URL);
    const monster = response.data.find(mon =>
      mon.name.toLowerCase() === name.toLowerCase()
    );

    if (!monster) {
      return res.status(404).json({ error: 'Monster not found' });
    }

    res.json(monster);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch monster' });
  }
};
