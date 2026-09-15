with open(r'c:\Users\amand\OneDrive\Desktop\3d-website\src\App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace presentationStages definition
stages_start_marker = "  const presentationStages = ["
stages_end_marker = "  /* ─── DATA: 10 SECONDARY OPERATIONS"

pos_start = content.find(stages_start_marker)
pos_end = content.find(stages_end_marker)

assert pos_start != -1 and pos_end != -1, "Stages markers not found"

new_stages_data = """  const presentationStages = [
    {
      num: '01',
      buttonCode: '01RAW',
      shortName: 'Raw Material',
      stageTitle: 'RAW MATERIAL VERIFICATION',
      metric: 'Optical Emission Spectrometer Chemistry Analysis',
      simpleExpl: 'We laser-test incoming steel wire coils to verify exact carbon and alloy chemistry before forging.',
      whyItMatters: 'Guarantees zero hidden raw material impurities or weak steel.',
      icon: <Microscope className="w-6 h-6 text-blue-600" />,
      tag: 'Chemical Verification Gate',
      equipment: 'Optical Emission Spectrometer (OES)',
    },
    {
      num: '02',
      buttonCode: '02INCOMING',
      shortName: 'Quarantine',
      stageTitle: 'INCOMING QUARANTINE',
      metric: 'Physical Segregation into Red / Green Racks',
      simpleExpl: 'Approved steel coils go to green racks; unverified bundles stay locked in red quarantine racks.',
      whyItMatters: 'Defective raw steel can never touch production machines.',
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      tag: 'Quarantine Gate',
      equipment: 'Physical Segregation Racks & Audits',
    },
    {
      num: '03',
      buttonCode: '03IN-HOUSE',
      shortName: 'Tooling Fab',
      stageTitle: 'IN-HOUSE TOOL FABRICATION',
      metric: 'Tungsten Carbide Die Grinding',
      simpleExpl: 'Our in-house master toolmakers carve tungsten carbide dies down to hair-thin precision.',
      whyItMatters: 'Instant tool replacements and sub-micron accuracy.',
      icon: <Wrench className="w-6 h-6 text-blue-600" />,
      tag: 'Tooling Gate',
      equipment: 'Carbide Die Grinders & EDM Cutters',
    },
    {
      num: '04',
      buttonCode: '045',
      shortName: '5 & 6-Die Forge',
      stageTitle: '5 & 6-DIE COLD FORGING',
      metric: 'Continuous Metallurgical Grain Flow (M4 to M24)',
      simpleExpl: 'High-speed 5 & 6-die formers hammer steel wire into bolts without cutting internal metal grains.',
      whyItMatters: 'Unbroken grain lines stop bolts from snapping under vibration.',
      icon: <Factory className="w-6 h-6 text-blue-600" />,
      tag: 'Cold Forging Gate',
      equipment: '5-Die & 6-Die Cold Formers',
    },
    {
      num: '05',
      buttonCode: '05SECONDARY',
      shortName: 'Secondary Ops',
      stageTitle: 'SECONDARY IN-HOUSE OPERATIONS',
      metric: 'Automatic Tapping, Slotting & CNC Turning',
      simpleExpl: 'Automatic slot milling, tapping, grooving, and CNC turning completed 100% under one roof.',
      whyItMatters: 'Faster turnaround and zero vendor dependency.',
      icon: <Cog className="w-6 h-6 text-blue-600" />,
      tag: 'Secondary Machining Gate',
      equipment: 'CNC Lathes & Centerless Grinders',
    },
    {
      num: '06',
      buttonCode: '06SEMS',
      shortName: 'SEMS Washers',
      stageTitle: 'SEMS WASHER THREAD ROLLING',
      metric: 'Captive Pre-Assembled Washer Rolling',
      simpleExpl: 'Washers are loaded onto bolt shanks before thread rolling so they spin freely but never fall off.',
      whyItMatters: 'Accelerates vehicle assembly and prevents missing washers.',
      icon: <Layers className="w-6 h-6 text-blue-600" />,
      tag: 'Captive SEMS Gate',
      equipment: 'Rotary Die Thread Rollers',
    },
    {
      num: '07',
      buttonCode: '07SCADA',
      shortName: 'SCADA Furnace',
      stageTitle: 'SCADA HEAT TREATMENT',
      metric: 'Continuous Mesh-Belt SCADA Hardening & Tempering',
      simpleExpl: 'Continuous mesh furnaces harden bolts 24/7 with computer temperature locks.',
      whyItMatters: 'Locks in high tensile strength while keeping core toughness.',
      icon: <Flame className="w-6 h-6 text-blue-600" />,
      tag: 'SCADA Thermal Gate',
      equipment: 'Mesh-Belt Furnaces + SCADA',
    },
    {
      num: '08',
      buttonCode: '08AUTOMATIC',
      shortName: 'PLC Plating',
      stageTitle: 'AUTOMATIC PLC SURFACE COATING',
      metric: 'Zinc, Geomet Zinc Flake & Phosphating',
      simpleExpl: 'Robotic hoists apply protective coatings like trivalent zinc, Geomet, or phosphating.',
      whyItMatters: 'Protects fasteners against rust for up to 1,500+ salt-spray hours.',
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      tag: 'PLC Plating Gate',
      equipment: 'Automated Barrel & Rack Lines',
    },
    {
      num: '09',
      buttonCode: '09TECHNOFOUR',
      shortName: 'Eddy Current',
      stageTitle: 'TECHNOFOUR EDDY CURRENT SORTING',
      metric: '100% High-Speed NDT Electronic Scanning',
      simpleExpl: 'Every single bolt passes magnetic eddy-current scanners to detect surface cracks or hardness flaws.',
      whyItMatters: '100% non-destructive sorting ensures zero defective parts.',
      icon: <Gauge className="w-6 h-6 text-blue-600" />,
      tag: '100% NDT Gate',
      equipment: 'Technofour Multifect-EC Systems',
    },
    {
      num: '10',
      buttonCode: '10AUTOMATED',
      shortName: 'Dispatch & QR',
      stageTitle: 'AUTOMATED PACKAGING & DISPATCH',
      metric: 'Safety Stock Store & Barcode Traceability',
      simpleExpl: 'Fasteners are weighed, packed, QR-labeled, and stocked in customer buffer stores.',
      whyItMatters: 'Guarantees on-time delivery with complete coil traceability.',
      icon: <Truck className="w-6 h-6 text-blue-600" />,
      tag: 'Safety Stock Gate',
      equipment: 'Automated Packaging & Barcode Lines',
    },
  ];\n\n  """

content = content[:pos_start] + new_stages_data + content[pos_end:]

with open(r'c:\Users\amand\OneDrive\Desktop\3d-website\src\App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Pipeline data updated with ultra easy plain English!")
