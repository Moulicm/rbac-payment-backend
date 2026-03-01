const prisma = require("../../config/db");
const { PaymentStatus } = require("../../utils/enums");

exports.createPayment = async (userId, amount, currency) => {
  const payment = await prisma.payment.create({
    data: { userId, amount, currency }
  });

  // Simulate async processing
  setTimeout(async () => {
    const success = Math.random() > 0.3;

    await prisma.payment.update({
      where: { id: payment.id },
      data: {
        status: success
          ? PaymentStatus.SUCCESS
          : PaymentStatus.FAILED
      }
    });
  }, 3000);

  return payment;
};

exports.getMyPayments = async (userId) => {
  return prisma.payment.findMany({ where: { userId } });
};

exports.getAllPayments = async () => {
  return prisma.payment.findMany();
};