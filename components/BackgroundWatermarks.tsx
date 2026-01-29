"use client";

export default function BackgroundWatermarks() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none hidden md:block">
            {/* Python logo: bottom-left */}
            <i
                className="fa-brands fa-python absolute bottom-[15%] left-[10%] text-[250px] opacity-[0.04] grayscale opacity-40 text-cyan-400"
            />
            {/* AWS logo: top-right */}
            <i
                className="fa-brands fa-aws absolute top-[15%] right-[10%] text-[250px] opacity-[0.04] grayscale opacity-40 text-cyan-400"
            />
            {/* PyTorch logo: bottom-right */}
            <i
                className="devicon-pytorch-original absolute bottom-[18%] right-[12%] text-[250px] opacity-[0.04] grayscale opacity-40 text-cyan-400"
            />
        </div>
    );
}
