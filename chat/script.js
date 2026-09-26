const navigationButtons = document.querySelectorAll("[data-go]");

navigationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = button.dataset.go;
  });
});

const signalReadings = {
  tail: {
    label: "SIGNAL 01 / LA QUEUE",
    title: "Une queue dressée",
    copy: "Une queue verticale accompagne souvent une approche amicale ou une salutation. Si elle fouette l’air, le chat peut être très stimulé ou agacé : laissez-lui de l’espace."
  },
  ears: {
    label: "SIGNAL 02 / LES OREILLES",
    title: "Des oreilles qui pivotent",
    copy: "Les oreilles orientées vers l’avant peuvent signaler de l’attention. Plaquées ou tournées sur les côtés, elles peuvent indiquer de l’inconfort : observez aussi la posture et le contexte."
  },
  eyes: {
    label: "SIGNAL 03 / LE REGARD",
    title: "Un clignement lent",
    copy: "Un regard détendu ponctué d’un clignement lent peut accompagner un moment calme. Vous pouvez cligner doucement à votre tour, sans fixer le chat ni chercher à forcer l’échange."
  },
  posture: {
    label: "SIGNAL 04 / LA POSTURE",
    title: "Un corps relâché",
    copy: "Un corps souple, qui se repose sans tension, évoque souvent un chat à l’aise. Une posture tassée ou figée appelle plutôt à ralentir et à lui laisser une voie de retrait."
  }
};

const signalChoices = document.querySelectorAll("[data-signal]");

signalChoices.forEach((button) => {
  button.addEventListener("click", () => {
    const reading = signalReadings[button.dataset.signal];
    if (!reading) return;

    signalChoices.forEach((choice) => {
      const isSelected = choice === button;
      choice.classList.toggle("is-selected", isSelected);
      choice.setAttribute("aria-pressed", String(isSelected));
    });

    document.querySelector("#reading-label").textContent = reading.label;
    document.querySelector("#reading-title").textContent = reading.title;
    document.querySelector("#reading-copy").textContent = reading.copy;
  });
});