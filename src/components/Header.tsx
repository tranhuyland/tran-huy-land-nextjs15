"use client";
import React from "react";
import { PlusCircle } from "lucide-react";

interface HeaderProps {
  onOpenDeposit: () => void;
}

export default function Header({ onOpenDeposit }: HeaderProps) {
  return (
    <header class="sticky top-0 z-40 bg-white/90 glass border-b border-slate-100 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <img src="https://i.postimg.cc/JhKg8VZ9/70554272-47DB-4D3A-A1AE-2782EFCAF00F.png" alt="Trần Huy Land" class="h-9 sm:h-11 w-auto object-contain select-none" />
          <div>
            <div id="logo-header">
              <h1 class="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight">TRẦN HUY LAND</h1>
            </div>
            <p class="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Giỏ Hàng Thật • Pháp Lý Minh Bạch</p>
          </div>
        </div>

        <nav class="hidden lg:flex items-center gap-8 text-sm font-bold text-slate-600">
          <a href="#" class="hover:text-slate-900 transition-all">Trang Chủ</a>
          <a href="#listing-section" class="hover:text-slate-900 transition-all">Nhà Đất Đang Bán</a>
          <a href="#about-section" class="hover:text-slate-900 transition-all">Giới Thiệu</a>
          <a href="#blog-section" class="hover:text-slate-900 transition-all">Tin Tức Khảo Sát</a>
        </nav>

        <div class="flex items-center gap-2">
          <button onClick={onOpenDeposit} class="bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold text-sm px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-all active:scale-95 shadow-sm">
            <PlusCircle class="w-4 h-4 text-slate-900" /> Ký Gửi Nhanh
          </button>
        </div>
      </div>
    </header>
  );
}