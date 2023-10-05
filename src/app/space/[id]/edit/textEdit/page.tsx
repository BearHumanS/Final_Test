"use client";

import Button from "@/components/common/Button";
import Header from "@/components/common/Header";
import TextEditor from "@/components/textEditor/FroalaTextEditor";
import ToastUi from "@/components/toast/ToastUi";
import { componentsSave } from "@/lib/api/componentsSaveAPI";
import { froalaEditorStore, useToastStore } from "@/lib/store/store.module";
import { useCallback, useEffect, useState } from "react";

const TextEditPage = () => {
  const { text } = froalaEditorStore();
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const { showToast } = useToastStore();

  const onSave = useCallback(async () => {
    if (!text) {
      return false;
    }

    const componentTempId = 1;
    const textType: "cont" | "link" | "temp" | "line" | "page" = "cont";
    const params = {
      componentTempId: 165,
      type: textType,
      content: text,
    };

    try {
      await componentsSave(componentTempId, params);
    } catch (error) {
      console.error("error:", error);
    }
  }, [text]);

  useEffect(() => {
    const autoSave = setInterval(async () => {
      const isSaved = await onSave();
      if (isSaved) {
        showToast("자동 저장 중입니다.");
      }
    }, 10000);

    return () => clearInterval(autoSave);
  }, [showToast, onSave]);

  useEffect(() => {
    setIsBtnDisabled(!text);
  }, [text]);

  return (
    <>
      <div className="flexable flex-col">
        <Header />
        <div className="mt-4">
          <TextEditor />
        </div>

        <div className="mt-8 w-full">
          <Button
            onClick={onSave}
            disabled={isBtnDisabled}
            {...(isBtnDisabled ? { $disabled: true } : { $save: true })}
          >
            확인
          </Button>
        </div>
      </div>
      <ToastUi />
    </>
  );
};

export default TextEditPage;
