import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type MenuCardProps = {
  name: string;
  price: number;
  tag?: string;
};

export default function MenuCard({ name, price, tag }: MenuCardProps) {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.name}>{name}</Text>
          {tag && (
            <View style={styles.tagBadge}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          )}
        </View>
        <Text style={styles.price}>{price} ฿</Text>
      </View>

      {/* ปุ่มกดไลก์โทน Slate */}
      <Pressable
        style={({ pressed }) => [
          styles.likeBtn,
          likes > 0 && styles.likeBtnActive,
          pressed && { opacity: 0.7 },
        ]}
        onPress={() => setLikes(likes + 1)}
      >
        <Text style={[styles.likeText, likes > 0 && styles.likeTextActive]}>
          {likes > 0 ? "♥" : "♡"} {likes}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#cbd5e1", // เทาอ่อน slate
    shadowColor: "#0f172a",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  infoContainer: {
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
  },
  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1e293b", // น้ำเงินเทาเข้ม
  },
  tagBadge: {
    backgroundColor: "#e2e8f0",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  tagText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#475569", // เทาสลัก slate
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2563eb", // น้ำเงินโมเดิร์น
  },
  likeBtn: {
    backgroundColor: "#f1f5f9",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  likeBtnActive: {
    backgroundColor: "#1e293b",
    borderColor: "#1e293b",
  },
  likeText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#475569",
  },
  likeTextActive: {
    color: "#ffffff",
  },
});
