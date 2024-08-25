import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
  Linking,
  Modal,
  StyleSheet,
} from "react-native";
import tw from "twrnc";
import Feather from "@expo/vector-icons/Feather";
import Icons from "@expo/vector-icons/Ionicons";
import {
  PRIMARY_COLOR,
  PRIMARY_GREEN,
  PRIMARY_INDIGO,
} from "../config/constants";

const ShipmentScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleFilter = (filter) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };
  const [activeFilters, setActiveFilters] = useState([]);
  const shipments = [
    {
      id: "417856914231",
      status: "RECEIVED",
      from: "Cairo",
      to: "Alexandria",
      origin: "Cairo",
      originAddress: "Dokki, 22 Nile St.",
      destination: "Alexandria",
      destinationAddress: "Smoha, 22 max St.",
      phoneNumber: "+201234567890",
    },
    {
      id: "417856914232",
      status: "CANCELED",
      from: "Cairo",
      to: "Alexandria",
      origin: "Cairo",
      originAddress: "Dokki, 22 Nile St.",
      destination: "Alexandria",
      destinationAddress: "Smoha, 22 max St.",
      phoneNumber: "+201234567890",
    },
    {
      id: "417856914233",
      status: "CANCELED",
      from: "Cairo",
      to: "Alexandria",
      origin: "Cairo",
      originAddress: "Dokki, 22 Nile St.",
      destination: "Alexandria",
      destinationAddress: "Smoha, 22 max St.",
      phoneNumber: "+201234567890",
    },
    {
      id: "417856914234",
      status: "CANCELED",
      from: "Cairo",
      to: "Alexandria",
      origin: "Cairo",
      originAddress: "Dokki, 22 Nile St.",
      destination: "Alexandria",
      destinationAddress: "Smoha, 22 max St.",
      phoneNumber: "+201234567890",
    },
    {
      id: "417856914235",
      status: "CANCELED",
      from: "Cairo",
      to: "Alexandria",
      origin: "Cairo",
      originAddress: "Dokki, 22 Nile St.",
      destination: "Alexandria",
      destinationAddress: "Smoha, 22 max St.",
      phoneNumber: "+201234567890",
    },
  ];

  const ShipmentItem = ({
    id,
    status,
    from,
    to,
    origin,
    originAddress,
    destination,
    destinationAddress,
    phoneNumber,
  }) => {
    const [fill, setFill] = useState(false);
    const [open, setOpened] = useState(false);

    const handleCall = () => {
      Linking.openURL(`tel:${phoneNumber}`);
    };

    const handleWhatsApp = () => {
      Linking.openURL(`whatsapp://send?phone=${phoneNumber}`);
    };
    return (
      <View style={tw`w-full bg-gray-100 mb-2 rounded-xl`}>
        <View
          style={tw`flex-row items-center px-2 py-1 ${
            open && " border-b border-white border-dashed"
          } ${fill && `border border-[${PRIMARY_COLOR}]`}`}
        >
          <TouchableOpacity style={tw`mr-3`} onPress={() => setFill(!fill)}>
            <View
              style={tw`w-5 h-5 border flex items-center justify-center border-gray-300 ${
                fill == true ? "bg-[" + PRIMARY_COLOR + "]" : "bg-transparent"
              } rounded`}
            >
              {fill && <Text style={tw`text-white text-sm`}>✔</Text>}
            </View>
          </TouchableOpacity>
          <Image
            source={require("../../assets/img/package.png")}
            style={tw`w-10 h-10 mr-3`}
          />
          <View style={tw`flex-1`}>
            <View style={tw`flex-row justify-between items-center w-full`}>
              <Text style={tw`font-bold`}>AWB</Text>
            </View>
            <Text style={tw`text-lg font-bold`}>{id}</Text>
            <Text style={tw`text-gray-500`}>
              {from} → {to}
            </Text>
          </View>
          <View
            style={tw`${
              status === "RECEIVED" ? "bg-blue-100" : "bg-red-100"
            } px-2 py-1 rounded mr-3`}
          >
            <Text
              style={tw`${
                status === "RECEIVED" ? "text-blue-600" : "text-red-600"
              } text-xs`}
            >
              {status}
            </Text>
          </View>
          <TouchableOpacity
            style={tw`bg-white rounded-full p-1 w-[20px] h-[20px] items-center`}
            onPress={() => setOpened(!open)}
          >
            <Feather name="maximize-2" style={tw`text-gray-400`} size={10} />
          </TouchableOpacity>
        </View>

        {open && (
          <View style={tw`bg-transparent p-4 rounded-lg`}>
            <View style={tw`flex-row items-center justify-between mb-4`}>
              <View style={tw`flex-1`}>
                <Text style={tw`text-xs text-blue-600 mb-1`}>Origin</Text>
                <Text style={tw`text-lg font-bold`}>{origin}</Text>
                <Text style={tw`text-sm text-gray-500`}>{originAddress}</Text>
              </View>
              <View style={tw`justify-center items-center px-2 flex-1`}>
                <Feather name="arrow-right" style={tw`text-blue-600 text-lg`} />
              </View>
              <View style={tw`flex-1`}>
                <Text style={tw`text-xs text-blue-600 mb-1`}>Destination</Text>
                <Text style={tw`text-lg font-bold`}>{destination}</Text>
                <Text style={tw`text-sm text-gray-500`}>
                  {destinationAddress}
                </Text>
              </View>
            </View>
            <View style={tw`flex-row justify-between`}>
              <TouchableOpacity
                style={tw`flex-1 flex-row items-center justify-center bg-[${PRIMARY_INDIGO}] py-3 rounded-xl mr-2`}
                onPress={handleCall}
              >
                <Icons
                  name="call-outline"
                  size={20}
                  style={tw`text-white mr-2`}
                />
                <Text style={tw`text-white font-semibold`}>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`flex-1 flex-row items-center justify-center bg-[${PRIMARY_GREEN}] py-3 rounded-xl ml-2`}
                onPress={handleWhatsApp}
              >
                <Icons
                  name="logo-whatsapp"
                  size={20}
                  style={tw`text-white mr-2`}
                />
                <Text style={tw`text-white font-semibold`}>WhatsApp</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  };

  const FilterButton = ({ label, isActive, onPress }) => (
    <TouchableOpacity
      onPress={onPress}
      style={tw`px-4 py-2 rounded-xl mr-2 mb-2 ${
        isActive ? "bg-blue-500" : "bg-gray-200"
      }`}
    >
      <Text
        style={tw`text-[16px] ${isActive ? "text-white" : "text-gray-700"}`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={tw`flex-1 bg-white py-4 pt-8`}>
      <StatusBar barStyle="dark-content" />
      <View style={tw`px-4 pt-2`}>
        <View style={tw`flex-row justify-between items-center mb-4`}>
          <Image
            source={require("../../assets/img/profile.png")}
            style={tw`w-10 h-10 rounded-full`}
          />
          <Image
            source={require("../../assets/img/logo_colour.png")}
            style={{
              ...tw`w-24 h-8`,
              objectFit: "contain",
            }}
          />
          <Feather name="bell" size={24} style={tw`text-blue-600`} />
        </View>

        <View style={tw`mb-4`}>
          <Text style={tw`text-gray-500`}>Hello,</Text>
          <Text style={tw`text-2xl font-bold`}>Ibrahim Shaker</Text>
        </View>

        <View style={tw`flex-row items-center bg-gray-100 rounded-xl p-3 mb-4`}>
          <Feather name="search" size={20} style={tw`text-gray-400 mr-2`} />
          <TextInput
            placeholder="Search"
            style={tw`flex-1 text-base`}
            placeholderTextColor="#999"
          />
        </View>

        <View style={tw`flex-row justify-between mb-4`}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={tw`flex-row items-center justify-center bg-gray-100 rounded-xl py-3 px-6`}
          >
            <Image
              source={require("../../assets/img/icons/filter.png")}
              style={{
                ...tw`w-6 h-4 rounded-full`,
                objectFit: "contain",
              }}
            />
            <Text style={tw`text-gray-600 font-semibold`}>Filters</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex-row items-center bg-blue-600 rounded-xl py-3 px-6`}
          >
            <Image
              source={require("../../assets/img/icons/scan.png")}
              style={{
                ...tw`w-6 h-4 rounded-full`,
                objectFit: "contain",
              }}
            />
            <Text style={tw`text-white font-semibold`}>Add Scan</Text>
          </TouchableOpacity>
        </View>

        <View style={tw`flex-row justify-between items-center mb-2`}>
          <Text style={tw`text-xl font-bold`}>Shipments</Text>
          <TouchableOpacity>
            <Text style={tw`text-blue-600`}>Mark All</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={shipments}
        renderItem={({ item }) => <ShipmentItem {...item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={tw`px-4`}
      />

      <View style={tw`flex-row justify-around py-2 border-t border-gray-200`}>
        <TouchableOpacity style={tw`items-center`}>
          <Image
            source={require("../../assets/img/icons/boxes-icon.png")}
            style={{
              ...tw`w-6 h-4 rounded-full`,
              objectFit: "contain",
            }}
          />
          <Text style={tw`text-blue-600 text-xs mt-1`}>Shipments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`items-center`}>
          <Image
            source={require("../../assets/img/icons/barcode-scan-icon.png")}
            style={{
              ...tw`w-6 h-4 rounded-full`,
              objectFit: "contain",
            }}
          />
          <Text style={tw`text-gray-400 text-xs mt-1`}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`items-center`}>
          <Image
            source={require("../../assets/img/icons/wallet-icon.png")}
            style={{
              ...tw`w-6 h-4 rounded-full`,
              objectFit: "contain",
            }}
          />
          <Text style={tw`text-gray-400 text-xs mt-1`}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`items-center`}>
          <Image
            source={require("../../assets/img/icons/avatar-icon.png")}
            style={{
              ...tw`w-6 h-4 rounded-full`,
              objectFit: "contain",
            }}
          />
          <Text style={tw`text-gray-400 text-xs mt-1`}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Filter Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={tw`w-10 bg-gray-500 h-1.5 rounded-xl mb-2`}></View>
            <View
              style={tw`flex flex-row items-center justify-between px-2 mt-2 border-b border-gray-100 w-full`}
            >
              <TouchableOpacity
                style={tw`z-10`}
                onPress={() => setModalVisible(false)}
              >
                <Text
                  style={tw`text-center text-[${PRIMARY_INDIGO}] font-semibold`}
                >
                  {" "}
                  Done{" "}
                </Text>
              </TouchableOpacity>
              <Text style={tw`text-center font-semibold`}>
                {" "}
                Filters{" "}
              </Text>
              <TouchableOpacity
                style={tw`z-10`}
                onPress={() => setModalVisible(false)}
              >
                <Text
                  style={tw`text-center text-[${PRIMARY_INDIGO}] font-semibold`}
                >
                  {" "}
                  Cancle{" "}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={tw`w-full mt-5 py-4 px-2`}>
              <Text style={tw`font-semibold mb-2`}>SHIPMENT STATUS</Text>
              <View style={tw`flex-row flex-wrap`}>
                {[
                  "Received",
                  "Putaway",
                  "Delivered",
                  "Canceled",
                  "Rejected",
                  "Lost",
                  "On Hold",
                ].map((status) => (
                  <FilterButton
                    key={status}
                    label={status}
                    isActive={activeFilters.includes(status)}
                    onPress={() => toggleFilter(status)}
                  />
                ))}
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ShipmentScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // marginTop: 22,
    backgroundColor: "rgba(0, 0, 0, 0.5);",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
    marginTop: 18.38,
    color: "#393836",
    fontFamily: "Mulish-Regular",
  },
  modalView: {
    marginTop: 30,
    backgroundColor: "white",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: 5,
    height: "auto",
    width: "100%",
    bottom: 0,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
