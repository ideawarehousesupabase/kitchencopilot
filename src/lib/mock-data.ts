export const summary = {
  ordersToday: 128,
  revenue: 2480,
  waste: 12,
  efficiency: 89,
};

export const ordersTrend = [
  { day: "Mon", orders: 92, revenue: 1820 },
  { day: "Tue", orders: 105, revenue: 2050 },
  { day: "Wed", orders: 118, revenue: 2310 },
  { day: "Thu", orders: 110, revenue: 2180 },
  { day: "Fri", orders: 145, revenue: 2890 },
  { day: "Sat", orders: 162, revenue: 3210 },
  { day: "Sun", orders: 128, revenue: 2480 },
];

export const wasteTrend = [
  { week: "W1", waste: 18 },
  { week: "W2", waste: 16 },
  { week: "W3", waste: 14 },
  { week: "W4", waste: 12 },
  { week: "W5", waste: 11 },
  { week: "W6", waste: 12 },
];

export const efficiencyTrend = [
  { day: "Mon", value: 78 },
  { day: "Tue", value: 82 },
  { day: "Wed", value: 85 },
  { day: "Thu", value: 84 },
  { day: "Fri", value: 88 },
  { day: "Sat", value: 91 },
  { day: "Sun", value: 89 },
];

export const forecast = {
  tomorrowOrders: 145,
  peakHour: "7 PM",
  highDemand: ["Pizza", "Burger", "Wrap"],
  hourly: [
    { hour: "11", orders: 8 },
    { hour: "12", orders: 22 },
    { hour: "13", orders: 28 },
    { hour: "14", orders: 14 },
    { hour: "15", orders: 9 },
    { hour: "16", orders: 11 },
    { hour: "17", orders: 18 },
    { hour: "18", orders: 26 },
    { hour: "19", orders: 34 },
    { hour: "20", orders: 24 },
    { hour: "21", orders: 14 },
  ],
};

export const recommendations = [
  { title: "Prepare 30 extra pizza dough", detail: "Friday demand peak detected", tag: "Prep" },
  { title: "Increase chicken stock by 20%", detail: "Weekend forecast shows higher burger orders", tag: "Inventory" },
  { title: "Reduce salad preparation by 15%", detail: "Lower lunch traffic predicted", tag: "Waste" },
  { title: "Burger demand expected after 6 PM", detail: "Prep stations ready by 5:30 PM", tag: "Timing" },
];

export const inventory = [
  { name: "Pizza Dough", stock: 40, max: 100, unit: "kg", status: "ok", expiry: "2d", reorder: 30, supplier: "Doughworks Co.", usage: "12 kg in last 24h" },
  { name: "Cheese", stock: 8, max: 50, unit: "kg", status: "low", expiry: "5d", reorder: 15, supplier: "Dairy Direct", usage: "6 kg in last 24h" },
  { name: "Chicken", stock: 12, max: 60, unit: "kg", status: "low", expiry: "1d", reorder: 20, supplier: "Fresh Poultry Ltd.", usage: "9 kg in last 24h" },
  { name: "Tomato Sauce", stock: 6, max: 30, unit: "L", status: "low", expiry: "7d", reorder: 10, supplier: "Sauce Republic", usage: "3 L in last 24h" },
  { name: "Flour", stock: 9, max: 80, unit: "kg", status: "low", expiry: "30d", reorder: 25, supplier: "MillHouse", usage: "8 kg in last 24h" },
  { name: "Lettuce", stock: 22, max: 30, unit: "kg", status: "ok", expiry: "3d", reorder: 8, supplier: "Greens Market", usage: "5 kg in last 24h" },
  { name: "Beef Patties", stock: 55, max: 80, unit: "pcs", status: "ok", expiry: "2d", reorder: 20, supplier: "Prime Meats", usage: "32 pcs in last 24h" },
  { name: "Burger Buns", stock: 70, max: 120, unit: "pcs", status: "ok", expiry: "3d", reorder: 30, supplier: "Bakehouse", usage: "40 pcs in last 24h" },
  { name: "Fries", stock: 18, max: 40, unit: "kg", status: "ok", expiry: "14d", reorder: 12, supplier: "FrostFoods", usage: "10 kg in last 24h" },
  { name: "Cola Syrup", stock: 25, max: 30, unit: "L", status: "ok", expiry: "60d", reorder: 8, supplier: "BeverageHub", usage: "1.2 L in last 24h" },
];


export const prepPlan = [
  { dish: "Pizza Dough", current: 40, recommended: 70, priority: "High", status: "Pending", time: "45 min" },
  { dish: "Burger Patties", current: 55, recommended: 80, priority: "High", status: "In Progress", time: "30 min" },
  { dish: "Wrap Fillings", current: 20, recommended: 35, priority: "Medium", status: "Pending", time: "25 min" },
  { dish: "Fries Cut", current: 18, recommended: 30, priority: "Medium", status: "Done", time: "20 min" },
  { dish: "Sauce Batch", current: 6, recommended: 15, priority: "Low", status: "Pending", time: "15 min" },
  { dish: "Salad Mix", current: 22, recommended: 18, priority: "Low", status: "Done", time: "10 min" },
];

export const topDishes = [
  { name: "Pizza", value: 38 },
  { name: "Burger", value: 28 },
  { name: "Wrap", value: 18 },
  { name: "Fries", value: 16 },
];

export const wasteByCategory = [
  { name: "Produce", value: 35 },
  { name: "Dairy", value: 22 },
  { name: "Meat", value: 18 },
  { name: "Bakery", value: 15 },
  { name: "Other", value: 10 },
];

export const wasteSummary = {
  today: 4.2,
  weekly: 28.6,
  monthly: 112.4,
  savings: 320,
};

export const topWasted = [
  { name: "Lettuce", kg: 8.2, reason: "Over preparation", action: "Reduce salad prep by 20%." },
  { name: "Cheese", kg: 5.6, reason: "Over preparation", action: "Reduce prep by 15%." },
  { name: "Bread", kg: 4.1, reason: "Expiry", action: "Order smaller batches twice weekly." },
  { name: "Tomatoes", kg: 3.5, reason: "Spillage", action: "Improve handling at prep station." },
];


export const wasteReasons = [
  { reason: "Over-prep", percent: 42 },
  { reason: "Expiry", percent: 28 },
  { reason: "Spillage", percent: 18 },
  { reason: "Returns", percent: 12 },
];

export const activity = [
  { time: "10:42", title: "Inventory Updated", detail: "Cheese restocked +12kg" },
  { time: "10:15", title: "Prep Plan Generated", detail: "Friday rush plan ready" },
  { time: "09:50", title: "Waste Report Completed", detail: "Yesterday 4.1kg total" },
  { time: "08:00", title: "Shift Started", detail: "Morning team checked in" },
];

export const kitchenMemory = [
  {
    id: "friday-rush",
    title: "Friday Rush Preparation Guide",
    category: "Rush Hours",
    summary: "Pre-prep playbook for the 6–9 PM Friday peak window.",
    body: "Start cheese grating by 4 PM. Pre-portion 80 burger patties and 50 pizza dough balls. Assign two staff to fryer rotation. Wraps prepared in batches of 15 every 30 minutes.",
  },
  {
    id: "weekend-workflow",
    title: "Weekend Kitchen Workflow",
    category: "Preparation",
    summary: "Station-by-station handoff sequence for Sat–Sun.",
    body: "Open with cold-prep at 9 AM. Hot line online by 11 AM. Mid-shift cleanup at 3 PM. Dinner peak prep complete by 5:30 PM.",
  },
  {
    id: "burger-checklist",
    title: "Burger Station Checklist",
    category: "Cleaning",
    summary: "Daily open & close checklist for burger line.",
    body: "Open: sanitize grill, stock 60 patties, check sauce wells. Close: deep clean grill, log waste, restock condiments.",
  },
  {
    id: "pizza-sop",
    title: "Pizza Prep SOP",
    category: "Preparation",
    summary: "Standard procedure for dough, sauce and bake.",
    body: "Dough proof 4 hours minimum. Sauce ladled at 90g per 12\". Oven temp held at 280°C. Rotate pies every 90 seconds.",
  },
  {
    id: "holiday-prep",
    title: "Holiday Preparation Guide",
    category: "Holiday",
    summary: "Volume planning for bank holidays and festive peaks.",
    body: "Forecast 1.6x normal volume. Pre-order proteins 5 days ahead. Schedule extra prep staff for two days prior.",
  },
];


export const promotions = [
  { name: "Buy 1 Get 1 Pizza", revenue: 4200, profit: 980, status: "Active", recommendation: "Good" },
  { name: "Summer Combo", revenue: 2800, profit: 540, status: "Active", recommendation: "Moderate" },
  { name: "Burger Meal Deal", revenue: 5100, profit: 1320, status: "Active", recommendation: "Good" },
  { name: "Wrap & Drink", revenue: 1600, profit: 180, status: "Paused", recommendation: "Avoid" },
  { name: "Family Box", revenue: 3900, profit: 870, status: "Active", recommendation: "Good" },
];

export const reports = [
  { id: "kitchen", title: "Kitchen Performance Report", summary: "Throughput, ticket times, station load." },
  { id: "waste", title: "Waste Report", summary: "Category breakdown, root causes, savings forecast." },
  { id: "inventory", title: "Inventory Report", summary: "Stock levels, reorder points, expiry risk." },
  { id: "ops", title: "Operational Summary", summary: "Daily KPIs across all kitchen workflows." },
  { id: "compliance", title: "Compliance Report", summary: "Hygiene logs, temperature checks, audits." },
];
