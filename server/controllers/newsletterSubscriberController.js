const NewsletterSubscriber = require('../models/newsletterSubscriber');

// Criar novo assinante
exports.createSubscriber = async (req, res) => {
  try {
    const { email } = req.body;
    const newSubscriber = await NewsletterSubscriber.create({ email });
    res.status(201).json(newSubscriber);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar assinante', error });
  }
};

// Buscar todos os assinantes
exports.getSubscribers = async (req, res) => {
  try {
    const subscribers = await NewsletterSubscriber.findAll();
    res.status(200).json(subscribers);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar assinantes', error });
  }
};
