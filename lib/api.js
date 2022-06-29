export const fetchItem = async (itemID) => {
    const response = await fetch("../api/fetchItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemID }),
    });
    const item = await response.json();
    return item;
  }