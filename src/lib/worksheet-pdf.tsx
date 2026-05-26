import React from "react";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Font,
    renderToBuffer,
  } from "@react-pdf/renderer";
import { Worksheet } from "@/types/worksheet";
import path from "path";


Font.register({
    family: "NotoSansKR",
    src: path.join(
      process.cwd(),
      "public/fonts/NotoSansKR-Regular.ttf"
    ),
  });
const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontSize: 11,
    lineHeight: 1.6,
    fontFamily: "NotoSansKR",
  },
  title: {
    fontSize: 22,
    marginBottom: 16,
    fontFamily: "NotoSansKR",
  },
  section: {
    marginBottom: 14,
    fontFamily: "NotoSansKR",
  },
  heading: {
    fontSize: 15,
    marginBottom: 6,
    fontFamily: "NotoSansKR",
  },
  item: {
    marginBottom: 4,
  },
});

function WorksheetDocument({
  worksheet,
}: {
  worksheet: Worksheet;
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>{worksheet.title}</Text>

        <View style={styles.section}>
          <Text style={styles.heading}>대상</Text>
          <Text>{worksheet.target}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>목표</Text>
          {worksheet.goal.map((item, index) => (
            <Text key={index} style={styles.item}>
              {index + 1}. {item}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>준비물</Text>
          {worksheet.materials.map((item, index) => (
            <Text key={index} style={styles.item}>
              • {item}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>진행방법</Text>
          {worksheet.steps.map((item, index) => (
            <Text key={index} style={styles.item}>
              {index + 1}. {item}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>진행 질문</Text>
          {worksheet.questions.map((item, index) => (
            <Text key={index} style={styles.item}>
              Q{index + 1}. {item}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>활동지 문제</Text>
          {worksheet.problems.map((item, index) => (
            <Text key={index} style={styles.item}>
              {index + 1}. [{item.type}] {item.question}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>관찰포인트</Text>
          {worksheet.observationPoints.map((item, index) => (
            <Text key={index} style={styles.item}>
              • {item}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );
}

export async function createWorksheetPdf(
  worksheet: Worksheet
) {
  return renderToBuffer(
    <WorksheetDocument worksheet={worksheet} />
  );
}