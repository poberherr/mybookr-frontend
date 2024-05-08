type Transaction = {
  id: string;
  walletAddress: string;
  createdAt: string;
  status: string;
  fiatCurrency: string;
  userId: string;
  cryptoCurrency: string;
  isBuyOrSell: string;
  fiatAmount: number;
  dispute: boolean;
  paymentMarkedAt: string;
  orderProcessingType: string;
  ipAddress: string;
  amountPaid: number;
  paymentOptionId: string;
  walletLink: boolean;
  quoteId: string;
  addressAdditionalData: boolean;
  network: string;
  appVersionName: string;
  conversionPriceDataAtCreateOrder: ConversionPriceData;
  conversionPriceData: ConversionPriceData;
  conversionPrice: number;
  cryptoAmount: number;
  totalFeeInFiat: number;
  totalfeeDecimal: number;
  fiatAmountInUsd: number;
  countryCode: string;
  referenceCode: number;
  paymentOptions: PaymentOption[];
  isPaymentProcessing: boolean;
  autoExpiresAt: string;
  partnerApiKey: string;
  partnerCustomerId: string;
  stateCode: string;
  userKycType: string;
  cardPaymentData: CardPaymentData;
  liquidityProvider: string;
  slackThreadId: string;
  statusHistories: StatusHistory[];
  capturedAt: string;
  liquidityProviderData: LiquidityProviderData;
  paymentTnxId: string;
  paymentdateTime: string;
  isFirstOrder: boolean;
  paymentProcessingAt: string;
  updatedAt: string;
  cryptoTransactionData: CryptoTransactionData;
  exchangeId: string;
  partnerTransactionHash: string;
  transactionHashCreatedAt: string;
  completedAt: string;
  orderCost: OrderCost;
  transactionHash: string;
  partnerFeeInUsd: number;
  partnerFeeDecimal: number;
  webhookResponses: any[];
  _id: string;
};

type ConversionPriceData = {
  _id: string;
  id: string;
  createdAt: string;
  fiatCurrency: string;
  cryptoCurrency: string;
  paymentMethod: string;
  fiatAmount: number;
  network: string;
  cryptoAmount: number;
  isBuyOrSell: string;
  conversionPrice: number;
  marketConversionPrice: number;
  slippage: number;
  cryptoLiquidityProvider: string;
  fiatLiquidityProvider: string;
  partnerApiKey: string;
  sourceTokenAmount: number;
  sourceToken: string;
  notes: any[];
  fiatFeeAmount: number;
  feeDecimal: number;
  swaps: Swap[];
  fees: Fee[];
  fiatAmountInUsd: number;
  internalFees: InternalFee[];
  cost: Cost;
};

type PaymentOption = {
  currency: string;
  id: string;
  name: string;
  fields: Field[];
};

type Field = {
  name: string;
  value: string;
};

type CardPaymentData = {
  orderId: string;
  paymentId: string;
  pgData: PgData;
  liquidityProvider: string;
  updatedAt: string;
  status: string;
  processedOn: string;
};

type PgData = {
  paymentOptions: PaymentOption[];
  liquidityProvider: string;
  status: string;
};

type StatusHistory = {
  status: string;
  createdAt: string;
  message: string;
  isEmailSentToUser: boolean;
  partnerEventId: string;
};

type LiquidityProviderData = {
  id: string;
  amount: number;
  currency: string;
  description: string;
  transactionDate: string;
  postedDate: string;
  credit: boolean;
  type: string;
  sourceId: string;
  additionalInfo: AdditionalInfo;
  account: Account;
};

type AdditionalInfo = {
  payer: Payer;
};

type Payer = {
  name: string;
  address: Address;
  identifier: Identifier;
};

type Address = {
  country: string;
  postCode: string;
  postTown: string;
  addressLine1: string;
  addressLine2: string;
};

type Identifier = {
  bic: string;
  iban: string;
  type: string;
};

type Account = {
  id: string;
  name: string;
  balance: string;
  currency: string;
  status: string;
  identifiers: Identifier[];
  customerId: string;
  customerName: string;
  externalReference: string;
  accessGroups: any[];
  createdDate: string;
  directDebit: boolean;
  securedFundingLimit: string;
};

type CryptoTransactionData = {
  info: CryptoTransactionInfo;
  id: string;
  currency: string;
  amount: number;
  addressFrom: string;
  addressTo: string;
  address: string;
  status: string;
  type: string;
  txid: string;
  timestamp: number;
  datetime: string;
  fee: TransactionFee;
  recvWindow: number;
};

type CryptoTransactionInfo = {
  chain: string;
  areaCodeFrom: string;
  clientId: string;
  fee: string;
  amt: string;
  txId: string;
  areaCodeTo: string;
  ccy: string;
  from: string;
  to: string;
  state: string;
  nonTradableAsset: boolean;
  ts: string;
  wdId: string;
  feeCcy: string;
};

type TransactionFee = {
  currency: string;
  cost: number;
};

type OrderCost = {
  ethPriceInLocalCurrency: number;
  gasCostinLocalCurrency: number;
  transakMinimumFee: number;
  transakFeeAmount: number;
  fiatLiquidityProviderFee: number;
  gasCostinLocalCurrencyByFiatPartner: number;
  gasCostinLocalCurrencyByCryptoPartner: number;
  partnerFeeDecimal: number;
  partnerFeeInLocalCurrency: number;
  totalFeeDecimal: number;
  totalFeeAmount: number;
  gasCurrency: string;
  gasInNativeToken: number;
  gasCurrencyRateInUsd: number;
  totalAmountChargedByTransak: number;
};

type Swap = {
  sourceCurrency: string;
  destinationCurrency: string;
  sourceAmount: number;
  destinationAmount: number;
  paymentMethod: string;
  liquidityProvider: string;
  conversionPrice: number;
  feeInSourceAmount: number;
  networkFeeInSourceAmount: number;
  networkFeeInDestinationAmount: number;
  marketConversionPrice: number;
  isNonCustodial: boolean;
  isFiatliquidityProvider: boolean;
  isFiatPartnerDirectCryptoDeposit: boolean;
  isFiatPartnerAccountWalletDeposit: boolean;
  liquidityProviderData: boolean;
  originalDestinationAmount: number;
  isCryptoliquidityProvider: boolean;
};

type Fee = {
  name: string;
  value: number;
  id: string;
  ids: string[];
};

type InternalFee = {
  name: string;
  id: string;
  value: number;
};

type Cost = {
  ethPriceInLocalCurrency: number;
  gasCostinLocalCurrency: number;
  transakMinimumFee: number;
  transakFeeAmount: number;
  fiatLiquidityProviderFee: number;
  gasCostinLocalCurrencyByFiatPartner: number;
  gasCostinLocalCurrencyByCryptoPartner: number;
  partnerFeeDecimal: number;
  partnerFeeInLocalCurrency: number;
  totalFeeDecimal: number;
  totalFeeAmount: number;
  gasCurrency: string;
  gasInNativeToken: number;
  gasCurrencyRateInUsd: number;
  totalAmountChargedByTransak: number;
};
