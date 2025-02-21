"use client";
import React, { useState, useEffect } from "react";

import UserMetrics from "@/components/userMetrics";
import { formatDate } from "@/utils/formatDate";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const data = {
  current_streak: 6,
  best_streak: 6,
  level: 2,
  openingHistory: [
    {
      id: "32dbfc97-99b0-48ca-aa1e-38d75428db2c",
      resource_id: "0001",
      opened_at: "2025-02-03T03:00:00.000Z",
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      utm_channel: null,
    },
    {
      id: "fd60ecad-f2c5-4ede-aa93-c0a0a6c486da",
      resource_id: "0002",
      opened_at: "2025-02-04T03:00:00.000Z",
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      utm_channel: null,
    },
    {
      id: "ae48389b-1330-445c-b9e8-48629a78c210",
      resource_id: "0003",
      opened_at: "2025-02-05T03:00:00.000Z",
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      utm_channel: null,
    },
  ],
  messages: [
    "Excelente! Você alcançou a marca de 6 dias consecutivos. Você passará para a próxima fase. Parabéns!",
    "Legal! Seu melhor streak é de 6 dias.",
    "Nível Iniciante: continue evoluindo!",
  ],
};

const UserDashboardContent = () => {
  const { current_streak, best_streak, level, openingHistory, messages } = data;
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="w-[100%] h-[100%] p-3 flex-col">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-1xl font-bold">Dashboard</h1>
      </header>
      <section className="w-[100%] h-auto flex justify-between mb-6">
        <UserMetrics
          current_streak={data.current_streak}
          best_streak={data.best_streak}
          level={data.level}
        />
      </section>
      <section className="w-[100%] flex justify-center mb-8">
        <div className="w-[100%] h-[150px] shadow bg-brand-yellow rounded-[10px] shadow flex items-center justify-center">
          <h1 className="lg:text-3xl text-2x1 text-white font-bold text-center p-2">
            {messages[currentMessageIndex]}
          </h1>
        </div>
      </section>
      <section>
        <Table className="border border-gray-300 rounded-[15px] mb-5">
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Aberto em</TableHead>
              <TableHead>UTM Source</TableHead>
              <TableHead>UTM Medium</TableHead>
              <TableHead>UTM Campaign</TableHead>
              <TableHead>UTM Channel</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {openingHistory.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{formatDate(new Date(item.opened_at))}</TableCell>
                <TableCell>{item.utm_source || ""}</TableCell>
                <TableCell>{item.utm_medium || ""}</TableCell>
                <TableCell>{item.utm_campaign || ""}</TableCell>
                <TableCell>{item.utm_channel || ""}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
};

export default UserDashboardContent;
