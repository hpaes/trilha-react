type User = {
  name: string;
  email: string;
  address: {
    city?: string;
    state: string;
  };
};

function showWelcomeMessage(user: User) {
  return `Welcome ${user.name}, your e-email is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.state}`;
}

showWelcomeMessage({
  name: "Herbert",
  email: "herbert_pbarreto@hotmail.com",
  address: {
    city: "Recife",
    state: "PE",
  },
});
