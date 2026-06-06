import { SectionList, StyleSheet, Text, View } from "react-native";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];

// Item component to render each menu item
const Item = ({ name, price }) => (
  <View style={style.innerContainer}>
    <Text style={style.itemText}>{name}</Text>
    <Text style={style.itemText}>{price}</Text>
  </View>
);

// Section header component to render the category title
const sectionHeader = ({ section: { title } }) => (
  <Text style={style.titleText}>{title}</Text>
);

//separator component to render a line between items
const separator = () => <View style={style.separator} />;

const MenuItems = () => {
  // Function to render each item in the SectionList
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

  return (
    <View style={style.container}>
      <Text style={style.header}>Today&apos;s Menu</Text>
      <SectionList
        sections={menuItemsToDisplay}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionFooter={({ section: { data } }) => (
          <Text style={style.sectionFooter}>{data.length} items</Text>
        )}
        renderSectionHeader={sectionHeader}
        ItemSeparatorComponent={separator}
      ></SectionList>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    color: "#F4CE14",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },

  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 20,
  },
  titleText: {
    color: "#1f1e1e",
    fontSize: 24,
    backgroundColor: "#F4CE14",
    padding: 10,
    textAlign: "center",
  },

  separator: {
    height: 1,
    backgroundColor: "#4a462e",
  },
  sectionFooter: {
    textAlign: "center",
    marginBottom: 20,
    color: "#fffbfb",
  },
});

export default MenuItems;
