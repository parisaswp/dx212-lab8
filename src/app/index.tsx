import MenuCard from "@/components/MenuCard";
import { filterByBudget, Menu } from "@/lib/logic";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const MENUS: Menu[] = [
  { id: 1, name: "ชาไทยเย็น", price: 35 },
  { id: 2, name: "ข้าวมันไก่", price: 45, tag: "ยอดนิยม" },
  { id: 3, name: "ก๋วยเตี๋ยวเรือ", price: 50 },
  { id: 4, name: "ข้าวผัดหมูใส่ไข่", price: 55 },
  { id: 5, name: "ข้าวกะเพราหมูกรอบ", price: 65, tag: "รสจัด" },
  { id: 6, name: "สุกี้น้ำรวมมิตร", price: 70 },
  { id: 7, name: "สเต๊กหมูพริกไทยดำ", price: 89, tag: "แนะนำ" },
  { id: 8, name: "ข้าวหน้าเนื้อย่าง", price: 120, tag: "พรีเมียม" },
];

export default function Index() {
  const [budget, setBudget] = useState(50);
  const result = filterByBudget(MENUS, budget);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>กินในงบ</Text>
        <Text style={styles.appSubtitle}>ระบบจัดการงบมื้ออาหาร</Text>
      </View>

      {/* แถบคอนโทรลงบประมาณ การ์ดสีกรมท่า (Navy) */}
      <View style={styles.budgetCard}>
        <Text style={styles.budgetLabel}>งบประมาณของคุณ</Text>
        
        <View style={styles.budgetControls}>
          <Pressable
            style={({ pressed }) => [styles.btn, pressed && { opacity: 0.8 }]}
            onPress={() => setBudget(Math.max(0, budget - 10))}
          >
            <Text style={styles.btnText}>-10</Text>
          </Pressable>

          <View style={styles.priceDisplay}>
            <Text style={styles.budgetValue}>{budget}</Text>
            <Text style={styles.budgetUnit}>บาท</Text>
          </View>

          <Pressable
            style={({ pressed }) => [styles.btn, pressed && { opacity: 0.8 }]}
            onPress={() => setBudget(budget + 10)}
          >
            <Text style={styles.btnText}>+10</Text>
          </Pressable>
        </View>
      </View>

      {/* แถบจำนวนเมนู */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>เมนูในงบ</Text>
        <Text style={styles.sectionBadge}>{result.length} รายการ</Text>
      </View>

      {/* กรณีไม่มีเมนูในงบ */}
      {result.length === 0 && (
        <View style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>ไม่พบเมนูในงบนี้</Text>
          <Text style={styles.emptyDesc}>ลองกดเพิ่มงบประมาณด้านบนดูนะคะ</Text>
        </View>
      )}

      {/* รายการเมนู */}
      {result.map((m) => (
        <MenuCard
          key={m.id}
          name={m.name}
          price={m.price}
          tag={m.tag}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc", // สีพื้นหลังเทาสว่าง Slate 50
  },
  content: {
    padding: 24,
    paddingTop: 56,
    paddingBottom: 40,
    maxWidth: 480,
    alignSelf: "center",
    width: "100%",
  },
  header: {
    marginBottom: 20,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#0f172a", // Navy เข้ม
    letterSpacing: -0.5,
  },
  appSubtitle: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 2,
  },
  budgetCard: {
    backgroundColor: "#1e293b", // Slate Navy เข้มหรูหรา
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: "#0f172a",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 3,
  },
  budgetLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#94a3b8",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  budgetControls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceDisplay: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 6,
  },
  budgetValue: {
    fontSize: 36,
    fontWeight: "800",
    color: "#f8fafc",
  },
  budgetUnit: {
    fontSize: 16,
    fontWeight: "500",
    color: "#94a3b8",
  },
  btn: {
    backgroundColor: "#334155", // Slate อ่อนสำหรับปุ่ม
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#475569",
  },
  btnText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#334155",
  },
  sectionBadge: {
    fontSize: 12,
    color: "#64748b",
    backgroundColor: "#e2e8f0",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    fontWeight: "600",
  },
  emptyCard: {
    backgroundColor: "#ffffff",
    padding: 28,
    borderRadius: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  emptyTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#475569",
    marginBottom: 4,
  },
  emptyDesc: {
    fontSize: 13,
    color: "#94a3b8",
  },
});
