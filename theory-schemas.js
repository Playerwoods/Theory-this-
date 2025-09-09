// theory-schemas.js - Enhanced semantic schemas for theory generation
const TheorySchemas = {
    'relative deprivation': {
        constructs: {
            'expectation_achievement_gap': 'difference between expected and actual outcomes',
            'reference_group_comparison': 'social comparison with relevant others', 
            'perceived_distributive_injustice': 'subjective assessment of unfair resource allocation',
            'collective_grievance_intensity': 'emotional arousal from group-based injustice',
            'political_efficacy_belief': 'confidence in ability to influence political outcomes',
            'mobilization_resource_availability': 'material and social resources for collective action',
            'state_repression_capacity': 'government ability to suppress dissent'
        },
        causal_patterns: [
            ['expectation_achievement_gap', '+', 'perceived_distributive_injustice'],
            ['reference_group_comparison', '+', 'collective_grievance_intensity'],
            ['perceived_distributive_injustice', '+', 'collective_grievance_intensity'],
            ['collective_grievance_intensity', '+', 'political_efficacy_belief'],
            ['political_efficacy_belief', '+', 'mobilization_resource_availability'],
            ['state_repression_capacity', '-', 'mobilization_resource_availability']
        ],
        scope_conditions: ['visible_inequality', 'salient_reference_groups', 'political_opportunities']
    },

    'selectorate theory': {
        constructs: {
            'winning_coalition_size': 'number of supporters needed to maintain power',
            'selectorate_size': 'total pool of potential supporters',
            'loyalty_norm_strength': 'cultural expectation of supporter faithfulness',
            'public_goods_provision': 'resources benefiting entire population',
            'private_goods_distribution': 'targeted benefits to specific supporters',
            'leader_survival_probability': 'likelihood of maintaining political position',
            'citizen_welfare_outcomes': 'aggregate population wellbeing measures'
        },
        causal_patterns: [
            ['winning_coalition_size', '+', 'public_goods_provision'],
            ['selectorate_size', '+', 'leader_accountability'],
            ['loyalty_norm_strength', '-', 'leadership_turnover'],
            ['private_goods_distribution', '+', 'coalition_loyalty'],
            ['public_goods_provision', '+', 'citizen_welfare_outcomes']
        ],
        scope_conditions: ['political_competition', 'resource_availability', 'institutional_constraints'],
        theoretical_status: 'developing_framework'
    },

    'democratic backsliding': {
        constructs: {
            'executive_power_concentration': 'expansion beyond constitutional limits',
            'judicial_independence_erosion': 'political control over courts',
            'media_pluralism_decline': 'reduction in independent news sources',
            'civil_society_space_contraction': 'restrictions on NGOs and civic organizations',
            'electoral_integrity_degradation': 'manipulation of voting processes',
            'opposition_harassment_intensity': 'persecution of political rivals',
            'polarization_affective_distance': 'emotional hostility between political groups'
        },
        causal_patterns: [
            ['polarization_affective_distance', '+', 'executive_power_concentration'],
            ['executive_power_concentration', '+', 'judicial_independence_erosion'],
            ['judicial_independence_erosion', '+', 'media_pluralism_decline'],
            ['media_pluralism_decline', '+', 'civil_society_space_contraction'],
            ['opposition_harassment_intensity', '+', 'electoral_integrity_degradation']
        ],
        scope_conditions: ['competitive_elections', 'weak_institutions', 'polarized_society']
    },

    'democratic peace theory': {
        constructs: {
            'democratic_institutional_constraints': 'checks on executive war powers',
            'democratic_norm_internalization': 'peaceful conflict resolution values',
            'public_opinion_constraint': 'electoral costs of military action',
            'transparency_mechanisms': 'open information about intentions',
            'economic_interdependence': 'trade-based conflict costs',
            'international_conflict_propensity': 'likelihood of interstate war',
            'diplomatic_cooperation_frequency': 'peaceful interaction patterns'
        },
        causal_patterns: [
            ['democratic_institutional_constraints', '-', 'international_conflict_propensity'],
            ['democratic_norm_internalization', '+', 'diplomatic_cooperation_frequency'],
            ['public_opinion_constraint', '-', 'military_intervention_likelihood'],
            ['transparency_mechanisms', '-', 'security_dilemma_intensity'],
            ['economic_interdependence', '-', 'conflict_escalation_risk']
        ],
        scope_conditions: ['stable_democracies', 'no_territorial_disputes', 'economic_development']
    }
};

// Make available globally
window.TheorySchemas = TheorySchemas;
