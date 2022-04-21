import React from "react";
import PropTypes from "prop-types";
import { Text, FlatList } from "react-native";
import styles from "./listStyles";

export default function List({ data, fetchItems }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text style={styles.lazyItem}>{item.value}</Text>}
      onEndReached={fetchItems}
      onEndReachedThreshold={0.6}
    />
  );
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  fetchItems: PropTypes.func.isRequired
};