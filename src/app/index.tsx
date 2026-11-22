import { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import IceCards from "../components/IceCards";
import { icecream } from "../constants/icecream";

export default function HomeScreen() {
  const [cart, setCart] = useState<any[]>([]);
function addToCart(item: any) {
  setCart((current) => [...current, item]);
}

function removeFromCart(index: number){
  setCart((current)=>
    current.filter((_, itemIndex)=> itemIndex !== index));

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

}
  return (
    <ScrollView
      className="flex-1 bg-white px-5"
      showsVerticalScrollIndicator={false}>
      <View className="mb-6 mt-4">
        <Text className="text-base text-gray-500">
          Olá! 👋
        </Text>
        <Text className="mt-2 text-base font-bold text-pink-600">
          Itens no carrinho: {cart.length}
        </Text>

        <Text className="mt-1 text-3xl font-bold">
          O que deseja tomar hoje?
        </Text>
      </View>

      <View className="rounded-3xl bg-cyan-300 p-6">
        <Text className="text-sm font-bold text-white">OFERTA ESPECIAL</Text>

        <Text className="mt-2 text-3xl font-bold text-white">
          Sorvete + Cobertura
        </Text>

        <Text className="mt-2 text-base text-white">
          Uma combinação perfeita para o seu pedido.
        </Text>

        <TouchableOpacity className="mt-5 self-start rounded-xl bg-white px-5 py-3">
          <Text className="font-bold text-cyan-500">Peça Agora!!!</Text>
        </TouchableOpacity>
      </View>

      <Text className="mb-4 mt-8 text-2xl font-bold">Categorias</Text>

      <View className="flex-row justify-between">
        <TouchableOpacity className="w-[30%] items-center rounded-2xl bg-cyan-600 py-5">
          <Text className="text-4xl">🍦</Text>
          <Text className="mt-2 text-white">Casquinha</Text>
        </TouchableOpacity>

        <TouchableOpacity className="w-[30%] items-center rounded-2xl bg-cyan-600 py-5">
          <Text className="text-4xl">🍨</Text>
          <Text className="mt-2 text-white">Cascão</Text>
        </TouchableOpacity>

        <TouchableOpacity className="w-[30%] items-center rounded-2xl bg-cyan-600 py-5">
          <Text className="text-4xl">🍧</Text>
          <Text className="mt-2 text-white">Sunday</Text>
        </TouchableOpacity>
      </View>

      <Text className="mb-4 mt-8 text-2xl font-bold">Sorvetes em Destaques</Text>

      <View className="flex-row flex-wrap justify-between pb-8">
        {icecream.map((item) => (
          <IceCards
            key={item.id}
            name={item.name}
            price={item.price}
            emoji={item.emoji}
            onAdd={() => addToCart(item)}
          />
        ))}</View>
  <Text className="mb-4 mt-8 text-2x1 font-bold">
  Carrinho
</Text>
{cart.map((item,index) => (
  <View
key={index}
  className="mb-3 flex-row items-center justify-between rounded-x1 bg-gray-100 p-4">

<Text>
  {item.emoji} {item.name}
</Text>

<Text className="font-bold text-cyan-500">
  
  R$ {item.price.toFixed(2)}

</Text>

<TouchableOpacity onPress={ () => removeFromCart(index)}
  >
<Text className="font-bold text-red-600">
Remover
</Text>
</TouchableOpacity>
</View>
))}
</ScrollView>

  );
}